# Metaware Logo Particles

An interactive canvas particle animation that renders the **Metaware logo** ("meta" in
white, "ware" in teal `#00E6AE`) entirely out of thousands of particles.

## What It Does

A full-screen React/Next.js page with a single `<canvas>` component
(`metaware-logo-particles.tsx`):

- Thousands of particles sample the logo's vector path data (SVG path strings in
  `metaware-logo-path.ts`) and arrange themselves to form the logo shape.
- Particles react to mouse movement / touch — they scatter and drift away near the
  cursor, then settle back into the logo formation.
- Each particle has color (white or teal depending on which part of the logo it
  belongs to), size, life and scattered-color states.
- Mobile breakpoint handling for responsive canvas sizing.

Pure eye-candy: a logo reveal / hero-section animation built with raw Canvas 2D —
no WebGL, no backend, no assets beyond the path data.

## Features

- Logo formed from particle sampling of real SVG path data
- Mouse/touch-reactive scatter + reform animation
- Two-tone logo: white "meta" + teal "ware"
- Fullscreen responsive canvas (mobile aware)
- Zero dependencies beyond React/Next.js and Tailwind

## Tech Stack

| Layer      | Technology                                |
| ---------- | ----------------------------------------- |
| Framework  | Next.js 15 (App Router)                   |
| UI         | React 19, TypeScript, Tailwind CSS 3      |
| Graphics   | HTML5 Canvas 2D (raw, no WebGL)           |
| Components | shadcn/ui utilities, next-themes          |
| Originally | Generated with v0.app, customized afterwards|

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the particle logo animation fills the viewport.

Static build for hosting anywhere:

```bash
npm run build   # outputs to ./out (output: 'export')
```

## Project Structure

```
metaware-logo-particles.tsx  # Main canvas particle component (particle sim + render loop)
metaware-logo-path.ts        # SVG path data: METAWARE_LOGO_PATH_WHITE / _TEAL
app/
  page.tsx                   # Single page rendering the particle component
  layout.tsx                 # Root layout + theme provider
  globals.css
components/
  theme-provider.tsx
lib/
  utils.ts                   # cn() class merge helper
public/                      # Placeholder static assets
```

## Environment Variables

None required. The animation runs fully client-side.

## Deployment Notes

- Static export is enabled (`output: 'export'` in `next.config.mjs`) so the page
  can be hosted on GitHub Pages or any static host.
- For GitHub Pages project-site hosting the config sets
  `basePath: '/metaware-logo-particles'`. If you deploy to a custom domain or
  Vercel instead, **remove the `basePath` line** from `next.config.mjs`.
- Live demo: https://girishlade111.github.io/metaware-logo-particles/
- Originally auto-deployed on Vercel from v0.app.

## Customization

- Edit `metaware-logo-path.ts` to swap in your own SVG path strings and the
  particle system will render them instead.
- Tweak particle count, scatter radius, drift speed, and colors inside
  `metaware-logo-particles.tsx`.

---

Built by Girish Lade — https://ladestack.in
