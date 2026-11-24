---
name: denlagroup-theme
description: >-
  Centralized Frontend Design System for Denla Group web applications (Executive Navy & Gold theme with Prompt font, official Denla Group logo, and Denla British School favicon).
  Use whenever the user asks to build, style, or retrofit a web app, landing page, dashboard, or Google Apps Script UI
  using "DenlaGroup-Theme", "Denla theme", "DBS theme", or the Denla Group frontend standard.
---

# DenlaGroup-Theme Skill

Use this skill whenever creating a new web frontend or retrofitting an existing web application to match the **DenlaGroup-Theme** centralized standard.

## Local & Remote Source of Truth
- Local path: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme`
- GitHub Repo: `https://github.com/vicshukornpa/DenlaGroup-Theme`
- jsDelivr CDN (`v1.1.0`): `https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.1.0/dist/`
- Cloudflare Pages (when deployed): `https://denlagroup-theme.pages.dev/`
- Design Tokens (JSON): `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/tokens/design-tokens.json`
- Full Design Spec: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/DESIGN_SYSTEM.md`
- Core CSS: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/dist/denla-theme.css`
- Safe Tokens CSS (for retrofitting): `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/dist/denla-tokens.css`
- Tailwind CDN Config: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/dist/denla-tailwind-cdn.js`
- Tailwind v3 Preset: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/packages/tailwind-preset.js`
- Tailwind v4 `@theme`: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/dist/denla-tailwind-v4.css`
- Apps Script Starter: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/templates/appscript-starter.html`
- Brand Assets Directory: `/Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme/dist/assets/`

## Official Brand Icons & Favicon Standard (MANDATORY)
Always use the official brand images below instead of generic FontAwesome shield icons or text initials (`DG`):

1. **Denla Group Icon / Logo** (Header Navbar, Login Screen, Section Emblem, and inverted white in Footer):
   - Primary CDN URL: `https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.1.0/dist/assets/denla-group-logo.png`
   - Fallback URL (`onerror`): `https://lh3.googleusercontent.com/d/1_jYTlG_Bc98cSAlgydBVHY6u4sTA8X39`
   - **Header usage**:
     ```html
     <img src="https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.1.0/dist/assets/denla-group-logo.png"
          onerror="this.onerror=null;this.src='https://lh3.googleusercontent.com/d/1_jYTlG_Bc98cSAlgydBVHY6u4sTA8X39';"
          alt="Denla Group Logo" class="h-9 sm:h-11 w-auto object-contain">
     ```
   - **Dark Navy Footer usage** (white inverted via `.denla-logo-white` or `brightness-0 invert opacity-90`):
     ```html
     <img src="https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.1.0/dist/assets/denla-group-logo.png"
          alt="Denla Group Logo" class="denla-logo-white h-8 w-auto object-contain brightness-0 invert opacity-90">
     ```

2. **Denla British School (DBS) Favicon** (Browser Tab Icon for DBS / Denla apps):
   - Primary PNG URL (128x128 RGBA PNG — **required for Google Apps Script `.setFaviconUrl()`**, which rejects `.webp`):
     `https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.1.0/dist/assets/dbs-favicon.png`
   - High-res Touch Icon PNG (192x192):
     `https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.1.0/dist/assets/dbs-favicon-192.png`
   - Direct DBS Website WebP Icons:
     `https://www.dbsbangkok.ac.th/wp-content/uploads/2025/07/cropped-logo-32x32.webp`
     `https://www.dbsbangkok.ac.th/wp-content/uploads/2025/07/cropped-logo-192x192.webp`
   - **Google Apps Script `Code.gs` usage**:
     ```javascript
     HtmlService.createTemplateFromFile('Index')
       .evaluate()
       .setTitle('App Title — Denla Group')
       .setFaviconUrl('https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.1.0/dist/assets/dbs-favicon.png')
       .addMetaTag('viewport', 'width=device-width, initial-scale=1');
     ```
   - **HTML `<head>` usage**:
     ```html
     <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.1.0/dist/assets/dbs-favicon.png">
     <link rel="apple-touch-icon" href="https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.1.0/dist/assets/dbs-favicon-192.png">
     ```

3. **DBS Horizontal Vector Logos** (when full Denla British School wordmark is needed):
   - Dark logo (for white/light backgrounds): `https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.1.0/dist/assets/dbs-logo-dark.svg`
   - White logo (for navy/dark backgrounds): `https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.1.0/dist/assets/dbs-logo-white.svg`

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
   - Link the hosted jsDelivr CDN URLs (`@v1.1.0`: `denla-tailwind-cdn.js` + `denla-theme.css`) and set `.setFaviconUrl('https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.1.0/dist/assets/dbs-favicon.png')` in `doGet()`.
   - **CRITICAL GAS `HtmlService` Pitfall**: Never write `//` inside `<script>` template literals (e.g. `` `otpauth://...` ``) or inline JS strings, because Google Apps Script's HTML sanitizer strips `//...` to end-of-line as a comment and breaks `<script>` syntax; use `'https:' + '\x2f\x2f...'` or avoid `//` comments in `.html` scripts, and never return raw `Date` objects over `google.script.run` (serialize with `Utilities.formatDate`).
   - Use `<body class="denla-theme min-h-screen flex flex-col justify-between">`.
   - Follow the Sticky Header (`.denla-header`, `h-20`, `denla-group-logo.png` + vertical divider + tabs with `.denla-tab-active`), Hero Banner (`.denla-hero rounded-3xl` + `.denla-glass` cards), White Cards (`.denla-card`), Soft Cards (`.denla-card-soft`), Pill CTA Buttons (`.denla-btn-primary`), Form Inputs (`.denla-input`), Gold Section Dividers (`.denla-divider`), and Dark Navy Footer (`.denla-footer` with `.denla-logo-white`).

2. **React / Next.js / Vue / Vite**:
   - **Tailwind v3**: Add `denlagroup-theme/tailwind-preset` to `presets` in `tailwind.config.js` and import `denlagroup-theme/theme.css`.
   - **Tailwind v4**: `@import "denlagroup-theme/tailwind-v4";` and `@import "denlagroup-theme/theme.css";`.
   - **Without Tailwind**: Import `denlagroup-theme/theme.css` or `denlagroup-theme/tokens` and use `.denla-*` classes / CSS variables.

3. **Retrofitting Existing Web Apps (Non-Destructive)**:
   - Import `denla-tokens.css` first (zero global resets) and apply `var(--denla-*)` variables or opt-in `.denla-*` classes incrementally so existing layout rules do not break.
