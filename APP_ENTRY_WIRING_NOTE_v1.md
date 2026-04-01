# App Entry Wiring Note — v1

## Added files
- `src/App.tsx`
- `src/main.tsx`
- `index.html`
- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- `netlify.toml`

## What this does

This gives the repo drop:
- a root app entry
- automatic shared-style loading through `src/main.tsx`
- a simple path-based router for the `/a-i-r-o-n/...` routes
- Vite-ready local development/build scripts
- Netlify SPA redirect behavior

## Important note

This is a lightweight path-based SPA router so you can run immediately without adding a routing dependency first.

## Suggested next step

Preview these routes first:
- `/a-i-r-o-n`
- `/a-i-r-o-n/contact`
- `/a-i-r-o-n/modules`
- `/a-i-r-o-n/furnace-doctor`

Then continue refactoring any remaining standalone pages.
