# Centurion Compliance

Next.js App Router site for Centurion Compliance. English is the default; the header language control switches site copy to German. The contact form formats a message in the browser and opens the visitor's default email app for review and sending. No enquiry is submitted to this site's server.

## Before publication

- Update the business identity, address, email, phone, VAT number, site URL and WhatsApp details in `site.config.ts`.
- Replace legal TODO placeholders and obtain review of the German Impressum, privacy notice and website disclaimer.
- The requested Resend delivery and Cloudflare Turnstile are intentionally not configured. No email credentials, analytics, external tracking or third-party scripts are included.
- The Content-Security-Policy header is report-only until its directives have been validated against the final deployment.

## Deploy on Vercel

Import the repository into Vercel and deploy with the default Next.js framework settings. Configure the intended production domain, then update `site.config.ts` so canonical, Open Graph and sitemap URLs use that domain. Review the deployment's response headers and legal pages before launch.

## Cloudflare Pages

This project uses Next.js App Router features and is configured for Vercel deployment. Cloudflare Pages does not run a standard Next.js server build as-is. Use the current Cloudflare-supported Next.js deployment path (Workers/OpenNext) and validate route handlers, metadata, image optimization and response headers there before publishing. No migration or deployment scripts are included.
