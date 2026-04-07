# Shalonce Royal — Sanity Content Studio

Content management backend for the Shalonce Royal brand, powering multiple sub-sites from a single Sanity project.

## Stack

- **CMS**: [Sanity v5](https://www.sanity.io/) (Content Lake + Studio)
- **Language**: TypeScript
- **Framework**: React 19
- **Styling**: styled-components
- **Serverless**: Sanity Functions (`@sanity/functions` + `@sanity/blueprints`)
- **Email**: [MailerSend](https://www.mailersend.com/) Node.js SDK
- **Rich Text → HTML**: `@portabletext/to-html`

## Project Structure

```
├── constants/          # Singleton type & page ID constants
├── schemaTypes/
│   ├── shared/         # Reusable types (SEO, CTA, icons, site settings)
│   ├── wrestling/      # Wrestling site schemas (pages, email list, newsletter)
│   └── streaming/      # Streaming site schemas (schedule, settings)
├── functions/
│   └── distributeNewsLetter/  # Sanity Function — sends newsletter emails on publish
├── sanity.config.ts    # Multi-workspace config (Wrestling, Streaming, Root)
├── sanity.blueprint.ts # Blueprints config for Sanity Functions
└── sanity.cli.ts       # CLI config
```

## Workspaces

| Workspace   | Base Path     | Description                          |
| ----------- | ------------- | ------------------------------------ |
| Wrestling   | `/wrestling`  | Wrestling brand pages & content      |
| Streaming   | `/streaming`  | Streaming schedule & settings        |
| Root        | `/root`       | Shared site settings & side pages    |

All workspaces share the same project (`eimk2ovz`) and `production` dataset.

## Sanity Functions

### distributeNewsLetter

Triggers on publish of a `wrestlingNewsletter` document. Fetches all emails from `wrestlingEmailList`, renders the newsletter body to HTML, and sends a branded email to each subscriber via MailerSend.

**Environment variables** (set with `npx sanity@latest functions env add distributeNewsLetter <KEY> <VALUE>`):

| Variable              | Required | Description                        |
| --------------------- | -------- | ---------------------------------- |
| `MAILERSEND_API_KEY`  | Yes      | MailerSend API key                 |
| `FROM_EMAIL`          | Yes      | Verified sender email address      |
| `FROM_NAME`           | No       | Sender display name                |
| `LOGO_URL`            | No       | URL to logo image for email header |

## Scripts

```sh
npm run dev       # Start Studio in development mode
npm run build     # Build Studio for production
npm run deploy    # Deploy Studio to Sanity hosting
```

## Deployment

```sh
# Deploy the Studio
npm run deploy

# Deploy Sanity Functions
npx sanity@latest blueprints deploy
```
