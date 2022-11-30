# Renegade Website

This is the repository for the Renegade website. It is built using [Next JS](https://nextjs.oreg/) and [Sanity](https://www.sanity.io/).

The aim of this project is to provide a single code base for the website, and a single source for information architecture. This will allow Renegade to have a single source of truth for the website, and allow them to make changes to the website without having to go through a developer.

NextJS was chosen because it is a React framework that provides server side rendering. This is important because it allows the website to be indexed by search engines. It also provides a good developer experience, with hot reloading and a good CLI.

Sanity was chosen because it provides a good content architecture, and a good developer experience. It also provides a good user experience for content editors. As a headless CMS, Sanity content can be consumed by any technology via RESTful APIs.

## Features

While the list of features is still being determined, the following are the features that are currently being considered:

- 🚨 TypeScript - for type safety
- 🚦 ESLint - Pluggable JavaScript linter
- 💖 Prettier - Opinionated Code Formatter
- 📦 Next.js - The React Framework
- 🏗️ Sanity - Headless CMS
- 🗂 Root import - Import folders and files using the @ prefix.
- 🚫 lint-staged - Run linters against staged git files
- 👷 PR Workflow - Run Type Check & Linters on pull requests
- 🐶 Husky — Use git hooks with ease
- 📄 Commitizen - Conventional commit messages CLI
- 🚓 Commitlint - Lint commit messages

# 🚀 Quickstart Guide

```bash
git clone git@github.com:renegade/rmma.git
cd iwc && pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# ⚠️ Requirements

To get started, you will need to install the following:

- [Node](https://nodejs.org/en/) (v14.0.0 or above)
- [PNPM](https://pnpm.io/)

Next.js supports modern browsers with zero configuration.

- Chrome 64+
- Edge 79+
- Firefox 67+
- Opera 51+
- Safari 12+

# 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Sanity Documentation](https://www.sanity.io/docs) - learn about Sanity features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS.

Much of this project borrows from [Justin Linn](https://github.com/LinnJS/nextjs-sanity-website-builder) typescript conversion of the popular [Sanity Landing Page Builder](https://github.com/sanity-io/sanity-template-nextjs-landing-pages).

## Quick start

The below will be deleted once the project uses PNPM.

1. Clone this repository
2. `npm install` in the project root folder on local
3. `npm run dev` to start the studio and frontend locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:3000](http://localhost:3000)
4. `npm run build` to build to production locally
