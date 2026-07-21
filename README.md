# Lifetech Remake

A completely re-designed corporate website for **PT Lifetech Tanpa Batas** and **BeetPOS**. All original copy, contact information, images and logos are preserved exactly — only the presentation, layout and interactions have been rebuilt from scratch.

## Stack

- **React 18** + **Vite 5** (fast dev + build)
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config.js`)
- **Framer Motion** (section / card / hero animations)
- **Lenis** (smooth scroll)
- Custom cursor, WhatsApp floating action button, marquee clients row.

## Getting started

```bash
# 1. install dependencies
npm install

# 2. run the dev server (http://localhost:5173)
npm run dev

# 3. production build
npm run build
npm run preview
```

## Assets

All original images/SVGs from the previous website live under `public/assets/`.
They are referenced directly by URL (e.g. `/assets/logo-C7x2HOp7.svg`), so no
import step is required and no binary file has been altered. If you ever need
to add a new asset, just drop it in `public/assets/` and reference it with the
same URL pattern.

## Project layout

```
src/
├─ App.jsx                # page composition + Lenis smooth scroll + nav color mode
├─ index.css              # Tailwind v4 theme (green + blue tokens, cursor, marquee)
├─ main.jsx
├─ components/
│  ├─ CustomCursor.jsx    # elegant dot + ring cursor (auto-disabled on touch)
│  └─ Navbar.jsx          # sticky nav, scroll transition, mobile menu
└─ sections/
   ├─ HeroAbout.jsx       # Lifetech hero + About Us
   ├─ Products.jsx        # Our Solutions / Our Banking Solutions (tabs)
   ├─ Services.jsx        # bento-style services grid
   ├─ Clients.jsx         # infinite marquee of client logos
   ├─ Transition.jsx      # smooth green → blue transition band
   ├─ Beet.jsx            # BeetPOS hero, features, steps, testimonials, pricing
   └─ Footer.jsx          # contact + WhatsApp FAB
```

## Design notes

- **Upper half (Lifetech)** — fresh modern green palette (`--color-lt-green-*`)
  with a soft grid pattern, floating cards and a blinking cursor headline.
- **Lower half (BeetPOS)** — professional blue palette (`--color-bp-blue-*`),
  numbered feature cards, 3-step "how it works" and premium pricing plans.
- **Transition band** in the middle blends emerald → cyan → blue so scrolling
  through the page feels like a single continuous experience.
- Type pairing: **Sora** (display, tight tracking) + **Inter** (body).

## Content

All text is copied verbatim from the original site (`Lifetech.html`):
navigation labels, headings, service descriptions, testimonials, pricing
features, contact numbers, address and copyright. Do not edit copy without
approval — the visual layer is where changes belong.

## WhatsApp

The floating WhatsApp button and the two phone links in the footer use the
original numbers exactly:

- BeetPOS: `(+62) 895-3460-09572` → `https://wa.me/62895346009572`
- Lifetech: `(+62) 851-3383-4350` → `https://wa.me/6285133834350`
