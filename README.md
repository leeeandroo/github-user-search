# GitHub User Search

[![Build and Deploy to Netlify](https://github.com/leeeandroo/github-user-search/actions/workflows/production.yml/badge.svg?branch=main)](https://github.com/leeeandroo/github-user-search/actions/workflows/production.yml)

## Tech Stack

- Typescript
- React
- GraphQL + React Query + GraphQL Request
- TailwindCSS
- Vite
- Vitest + Testing Library + Cypress

## How to run

- `npm run dev` starts the application locally
- `npm run serve` builds and serve the application from that
- `npm run test:e2e` runs E2E tests locally
- `npm run test:unit` runs unit tests
- `npm run test:unit:coverage` runs tests and checks coverage

## Improvements

- User Experience

  - Add a loading while requesting the users

- Known issues

  - Some searches are returning items that are "organizations" and seems that the GraphQL API lacks
    permissions, so it's ending to have an empty object in the array. This issue requires more
    investigation.
