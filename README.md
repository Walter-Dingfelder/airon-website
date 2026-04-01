# A.I.R.O.N. Netlify Repo Drop — Production Candidate v4

This package is a ready-to-drop A.I.R.O.N. website starter built for a Vite + React + Netlify workflow.

## Included
- shared shell components
- shared core components
- doctrine components
- form components
- shared style layer
- refactored A.I.R.O.N. page routes
- root app entry
- simple route switch for `/a-i-r-o-n/...`
- Netlify SPA redirect file

## Current mapped routes
- `/a-i-r-o-n`
- `/a-i-r-o-n/contact`
- `/a-i-r-o-n/modules`
- `/a-i-r-o-n/furnace-doctor`
- `/a-i-r-o-n/fortune-teller`
- `/a-i-r-o-n/vault`
- `/a-i-r-o-n/one-touch-startup`
- `/a-i-r-o-n/catastrophe`
- `/a-i-r-o-n/industrial-campus`
- `/a-i-r-o-n/play-your-work`
- `/a-i-r-o-n/industry-period`
- `/a-i-r-o-n/safety`
- `/a-i-r-o-n/doctor-family`

## Local run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Netlify
This repo includes `netlify.toml` with SPA redirect behavior.

## Important notes
- Styling is a baseline shared system, not final locked art direction.
- The app entry uses a lightweight path-based router so the site can run immediately without adding a router package first.
- Raw `<a>` links are intentionally left in place for simplicity and Netlify compatibility.
- Replace placeholders with approved visuals as they become available.

## Strong next implementation steps
1. Preview home, contact, modules, and furnace doctor first
2. Replace placeholder hero blocks with approved visuals
3. Tune styling after first live preview
4. Add analytics / metadata / favicon if desired
5. Refactor any remaining non-refactored route files if new ones are added
