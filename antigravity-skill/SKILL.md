---
name: denlagroup-theme
description: >-
  Centralized Frontend Design System for Denla Group web applications (Executive Navy & Gold theme with Prompt font).
  Use whenever the user asks to build, style, or retrofit a web app, landing page, dashboard, or Google Apps Script UI
  using "DenlaGroup-Theme", "Denla theme", "DBS theme", or the Denla Group frontend standard.
---

# DenlaGroup-Theme Skill

Use this skill whenever creating a new web frontend or retrofitting an existing web application to match the **DenlaGroup-Theme** centralized standard.

## Local & Remote Source of Truth
- Local path: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme`
- GitHub Repo: `https://github.com/vicshukornpa/DenlaGroup-Theme`
- jsDelivr CDN: `https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.0.0/dist/`
- Cloudflare Pages (when deployed): `https://denlagroup-theme.pages.dev/`
- Design Tokens (JSON): `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/tokens/design-tokens.json`
- Full Design Spec: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/DESIGN_SYSTEM.md`
- Core CSS: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/dist/denla-theme.css`
- Safe Tokens CSS (for retrofitting): `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/dist/denla-tokens.css`
- Tailwind CDN Config: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/dist/denla-tailwind-cdn.js`
- Tailwind v3 Preset: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/packages/tailwind-preset.js`
- Tailwind v4 `@theme`: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/dist/denla-tailwind-v4.css`
- Apps Script Starter: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/templates/appscript-starter.html`

## Core Design Tokens
- **Font**: `Prompt` (Google Fonts, weights `300;400;500;600;700`, italic `300;400`)
- **Primary Navy**: `#0f2c59` (`--denla-navy`, `denla-navy`)
- **Hero Gradient**: `linear-gradient(135deg, #0f2c59 0%, #1d4ed8 100%)` (`.denla-hero`)
- **Accent Gold**: `#B89047` (`--denla-gold`, `denla-gold`), Light `#dfc08a`, Dark `#936e2f`
- **Background**: `#f8fafc` (`--denla-bg`), **Surface**: `#ffffff`, **Text Primary**: `#1e293b` (`--denla-slate`)
- **Soft Highlight Card**: `linear-gradient(135deg, #b7cbe3 0%, #c2d9e7 100%)` (`.denla-card-soft`)
- **Premium Shadow**: `0 10px 30px -10px rgba(15, 44, 89, 0.08)` (`.denla-shadow-premium`)

## How to Apply by Project Type

1. **Google Apps Script / Static HTML / PHP**:
   - Prefer linking the hosted Cloudflare Pages / jsDelivr CDN URLs (`denla-tailwind-cdn.js` + `denla-theme.css`) if deployed, OR copy/include `dist/denla-theme.css` & `dist/denla-tailwind-cdn.js` into the project.
   - Use `<body class="denla-theme min-h-screen flex flex-col justify-between">`.
   - Follow the Sticky Header (`.denla-header`, `h-20`, logo + vertical divider + tabs with `.denla-tab-active`), Hero Banner (`.denla-hero rounded-3xl` + `.denla-glass` cards), White Cards (`.denla-card`), Soft Cards (`.denla-card-soft`), Pill CTA Buttons (`.denla-btn-primary`), Form Inputs (`.denla-input`), Gold Section Dividers (`.denla-divider`), and Dark Navy Footer (`.denla-footer`).

2. **React / Next.js / Vue / Vite**:
   - **Tailwind v3**: Add `denlagroup-theme/tailwind-preset` to `presets` in `tailwind.config.js` and import `denlagroup-theme/theme.css`.
   - **Tailwind v4**: `@import "denlagroup-theme/tailwind-v4";` and `@import "denlagroup-theme/theme.css";`.
   - **Without Tailwind**: Import `denlagroup-theme/theme.css` or `denlagroup-theme/tokens` and use `.denla-*` classes / CSS variables.

3. **Retrofitting Existing Web Apps (Non-Destructive)**:
   - Import `denla-tokens.css` first (zero global resets) and apply `var(--denla-*)` variables or opt-in `.denla-*` classes incrementally so existing layout rules do not break.
