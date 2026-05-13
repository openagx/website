# OpenAGX Website

Official website repository for OpenAGX.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The site is configured for static export through `next.config.mjs`.

## CI/CD and Deployment

Deployment is configured through GitHub Actions and GitHub Pages.

- Workflow: `.github/workflows/pages.yml`
- Static output directory: `out/`
- Expected GitHub Pages URL: https://openagx.github.io/website/

To activate deployment in GitHub:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open **Actions** and run the Pages workflow if it does not start automatically.

## Deployment Trigger

A `.deploy-trigger` file is present to allow harmless commits that can manually trigger CI/CD when needed.

## Repository

https://github.com/openagx/website
