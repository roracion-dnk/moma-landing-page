# Nuxt 3 Kitchen Sink Template

This template is an open-source, customizable template built with Nuxt 3 and Tailwind CSS. It showcases how all Nuxt 3 features work with zero configuration on Vercel.

Look at the [Nuxt 3 documentation](https://nuxt.com) to learn more.

## Supported Features

- Server-Side Rendering (SSR)
- Server Routes
- Teleports
- Middleware
- Edge Rendering
- Nuxt Loading Indication
- `NuxtLink`
- `NuxtContent`
- Data Fetching

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnuxt3-kitchen-sink&project-name=nuxt3&repository-name=nuxt3&demo-title=Nuxt%203%20Kitchen%20Sink&demo-url=https%3A%2F%2Fnuxt3-kitchen-sink.vercel.app%2F&demo-image=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1673746665%2Fnuxt3_pkwbk6.png)

## Development Server

Start the development server on http://localhost:3000

```bash
git clone https://github.com/vercel/nuxt3-kitchen-sink.git
cd nuxt3-kitchen-sink
pnpm i
pnpm dev
```

## Admin OTP

Admin access uses a time-based one-time password from an authenticator app.

Set these environment variables before running or deploying:

```bash
NUXT_ADMIN_USERNAME=admin
NUXT_ADMIN_TOTP_SECRET=YOUR_BASE32_AUTHENTICATOR_SECRET
NUXT_ADMIN_SESSION_SECRET=YOUR_LONG_RANDOM_SESSION_SIGNING_SECRET
```

Use the same Base32 secret when adding the account to Google Authenticator,
Microsoft Authenticator, 1Password, Authy, or another TOTP app.

This requires a server-capable Nuxt deployment because the OTP is verified by a
server route. A fully static `nuxt generate` deployment cannot verify admin OTPs.
