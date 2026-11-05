# Project Setup

Static HTML/CSS/JS interactive package with Tailwind, built for offline
deployment (e.g. Mobile Locker). No server or Node runtime is needed once built.

## Structure

```
index.html
css/
  tailwind.css    ← compiled by Tailwind CLI. Do NOT hand-edit, gets overwritten.
  custom.css      ← hand-written CSS. Safe to edit directly.
  responsive.css  ← hand-written responsive overrides. Safe to edit directly.
js/
  script.js       ← plain JS, no build step needed.
assets/
  images/
  fonts/
scripts/
  package.js      ← Node script that assembles the dist/ folder (dev-only).
src/
  tailwind-input.css  ← Tailwind directives only (dev-only, not shipped).
tailwind.config.js    ← Tailwind config (dev-only, not shipped).
package.json          ← npm scripts (dev-only, not shipped).
```

## First-time setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Watches your HTML/JS files and rebuilds `css/tailwind.css` automatically as you
add/change Tailwind classes. Open `index.html` directly in a browser to preview
(or use a live-reload extension/server of your choice).

- Edit `css/custom.css` for anything Tailwind utilities can't express cleanly
  (fixed canvas sizing, keyframe animations, etc.) — never touched by the build.
- Edit `css/responsive.css` for breakpoint/responsive overrides — also never
  touched by the build.

## Packaging for deployment

### Option A — one command (recommended)

```bash
npm run ship
```

Runs `build` then `package` in sequence: minifies/purges Tailwind, then
assembles a clean `dist/` folder containing only the runtime files.

### Option B — step by step

```bash
npm run build    # minify & purge css/tailwind.css
npm run package  # assemble dist/ from runtime files
```

`scripts/package.js` copies only the files needed at runtime into `dist/`,
skipping all dev-only files automatically.

## What gets shipped (runtime files)

`npm run package` assembles exactly these into `dist/`:

```
index.html
css/tailwind.css
css/custom.css
css/responsive.css
js/
assets/
```

Zip the contents of `dist/` to send to Mobile Locker.

Do NOT include: `node_modules/`, `src/`, `scripts/`, `package.json`,
`package-lock.json`, `tailwind.config.js`, `.gitignore`, `README.md`.
None of these are needed at runtime and some tools may reject unexpected files.
