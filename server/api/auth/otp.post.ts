import { createHmac, timingSafeEqual } from 'node:crypto'
import {
  adminSessionCookieName,
  createAdminSessionToken,
  getAdminSessionMaxAge,
} from '../../utils/admin-session'

type OtpAuthBody = {
  username?: unknown
  otp?: unknown
}

const base32Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'

function decodeBase32(value: string) {
  const input = value.toUpperCase().replace(/[\s=-]/g, '')
  const bytes: number[] = []
  let bits = 0
  let buffer = 0

  for (const char of input) {
    const index = base32Alphabet.indexOf(char)

    if (index === -1) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Invalid TOTP secret format',
      })
    }

    buffer = (buffer << 5) | index
    bits += 5

    if (bits >= 8) {
      bytes.push((buffer >>> (bits - 8)) & 0xff)
      bits -= 8
    }
  }

  return Buffer.from(bytes)
}

function generateTotp(secret: string, counter: number) {
  const key = decodeBase32(secret)
  const message = Buffer.alloc(8)
  message.writeBigUInt64BE(BigInt(counter))

  const hash = createHmac('sha1', key).update(message).digest()
  const offset = hash[hash.length - 1] & 0x0f
  const binary =
    ((hash[offset] & 0x7f) << 24) |
    ((hash[offset + 1] & 0xff) << 16) |
    ((hash[offset + 2] & 0xff) << 8) |
    (hash[offset + 3] & 0xff)

  return String(binary % 1_000_000).padStart(6, '0')
}

function safeEqual(actual: string, expected: string) {
  const actualBuffer = Buffer.from(actual)
  const expectedBuffer = Buffer.from(expected)

  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer)
}

function verifyTotp(secret: string, otp: string) {
  const normalizedOtp = otp.replace(/\s/g, '')

  if (!/^\d{6}$/.test(normalizedOtp)) {
    return false
  }

  const currentCounter = Math.floor(Date.now() / 30_000)

  for (let offset = -1; offset <= 1; offset += 1) {
    if (safeEqual(normalizedOtp, generateTotp(secret, currentCounter + offset))) {
      return true
    }
  }

  return false
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody<OtpAuthBody>(event)
  const username = typeof body.username === 'string' ? body.username.trim() : ''
  const otp = typeof body.otp === 'string' ? body.otp.trim() : ''
  const configuredUsername = typeof config.adminUsername === 'string' ? config.adminUsername : 'admin'
  const totpSecret = typeof config.adminTotpSecret === 'string' ? config.adminTotpSecret : ''
  const adminSessionSecret = typeof config.adminSessionSecret === 'string' ? config.adminSessionSecret : ''
  const sessionSecret = adminSessionSecret || totpSecret

  if (!totpSecret) {
    throw createError({
      statusCode: 500,
      statusMessage: 'TOTP authentication is not configured',
    })
  }

  if (username !== configuredUsername || !verifyTotp(totpSecret, otp)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid username or authenticator code',
    })
  }

  setCookie(event, adminSessionCookieName, createAdminSessionToken(sessionSecret), {
    httpOnly: true,
    maxAge: getAdminSessionMaxAge(),
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  })

  return { ok: true }
})
