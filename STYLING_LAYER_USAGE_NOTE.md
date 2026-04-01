# Styling Layer Usage Note — v1

## Intended paths
- `src/styles/tokens.css`
- `src/styles/globals.css`
- `src/styles/layout.css`
- `src/styles/shell.css`
- `src/styles/components.css`

## Purpose

This styling layer gives the repo drop:
- a restrained industrial dark theme
- shared spacing and typography tokens
- shell styling for header and footer
- layout styling for grids and sections
- component styling for cards, buttons, forms, and doctrine blocks

## Suggested usage

Import `globals.css` once in your app/root entry so it pulls in the full style stack.

Example:

```tsx
import "../styles/globals.css";
```

Adjust the import path to your framework entry file as needed.

## Notes

- This is a baseline style layer, not a locked final art direction.
- Replace or tune colors, spacing, and typography after preview if needed.
- The goal is coherence first so the repo drop renders cleanly immediately.
