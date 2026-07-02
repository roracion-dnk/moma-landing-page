import { createHmac, timingSafeEqual } from 'node:crypto'

export const adminSessionCookieName = 'moma-admin-session'

const sessionDurationSeconds = 60 * 60 * 8

function sign(value: string, secret: string) {
  return createHmac('sha256', secret).update(value).digest('hex')
}

function safeEqual(actual: string, expected: string) {
  const actualBuffer = Buffer.from(actual)
  const expectedBuffer = Buffer.from(expected)

  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer)
}

export function createAdminSessionToken(secret: string) {
  const expiresAt = Date.now() + sessionDurationSeconds * 1000
  const payload = String(expiresAt)

  return `${payload}.${sign(payload, secret)}`
}

export function verifyAdminSessionToken(token: string | undefined, secret: string) {
  if (!token || !secret) {
    return false
  }

  const [payload, signature] = token.split('.')

  if (!payload || !signature) {
    return false
  }

  const expiresAt = Number(payload)

  if (!Number.isFinite(expiresAt) || expiresAt <= Date.now()) {
    return false
  }

  return safeEqual(signature, sign(payload, secret))
}

export function getAdminSessionMaxAge() {
  return sessionDurationSeconds
}
