# NuxtWaitlist - Simple Waitlist Template

![259shots_so](https://github.com/user-attachments/assets/147822de-6884-4e3f-a4fc-ca81cf100cc2)

This is a full stack nuxt waitlist template. It allows you to collect emails of people who are potentially interested in buying your product.

## Tech Stack
- [Typescript](https://www.typescriptlang.org/) - Language
- [Nuxt.js](https://www.nuxt.com/) - Framework
- [Drizzle](https://orm.drizzle.team/)  - ORM
- [Tailwind](https://tailwindcss.com/) - CSS
- [NuxtHub](https://hub.nuxt.com) - Hosting

## Prerequisites
- [NuxtHub](https://hub.nuxt.com/) Account
- Cloudflare account

## Setup

```bash
# clone repository
git clone git@github.com:masterkram/Nuxt-Waitlist.git [YOUR_APP_NAME]
cd [YOUR_APP_NAME]

# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Customization

1. edit `app.config.ts`
2. edit h1 and hero description in `pages/index.vue`

## Deploy

Deploy the application to NuxtHub

```bash
npx nuxthub deploy

# Choose
# Deploy <link> to NuxtHub?: Yes
# Select a project: Create a new project
# Project name: [YOUR_APP_NAME]
# Select a region for the storage: [YOUR_REGION]
# Production branch: main
```

> Run the migrations

```bash
npx nuxt dev --production
```

Check out the [deployment documentation](https://hub.nuxt.com/docs/getting-started/deploy) for more information.

