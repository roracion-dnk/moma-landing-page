import { adminSessionCookieName, verifyAdminSessionToken } from '../../utils/admin-session'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const adminTotpSecret = typeof config.adminTotpSecret === 'string' ? config.adminTotpSecret : ''
  const adminSessionSecret = typeof config.adminSessionSecret === 'string' ? config.adminSessionSecret : ''
  const sessionSecret = adminSessionSecret || adminTotpSecret
  const sessionToken = getCookie(event, adminSessionCookieName)

  if (!verifyAdminSessionToken(sessionToken, sessionSecret)) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Admin session required',
    })
  }

  return { ok: true }
})
