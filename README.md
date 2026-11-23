# DenlaGroup-Theme

มาตรฐานส่วนกลางด้าน Frontend Design System (**Executive Navy & Gold + Prompt Font**) สำหรับทุกเว็บแอปพลิเคชันในเครือ **Denla Group**

รองรับการใช้งานได้จาก **3 แหล่ง (Local / GitHub / Cloudflare)** และรองรับทุก Tech Stack:
- **Google Apps Script** / Plain HTML / PHP (ผ่าน CDN)
- **React / Next.js / Vue / Vite** (ผ่าน Tailwind v3 Preset, Tailwind v4 `@theme`, หรือ NPM/Git package)
- **เว็บเก่าที่ต้องการปรับโฉม (Retrofit)** (ผ่าน CSS Variables ที่ไม่กระทบสไตล์เดิม)
- **Antigravity AI** (มี Global Skill `denlagroup-theme` พร้อมใช้งานในทุกโปรเจกต์)

---

## โครงสร้างไฟล์ (Repository Structure)

```text
DenlaGroup-Theme/
├── dist/                        # ไฟล์พร้อมใช้งาน / Deploy ขึ้น Cloudflare Pages หรือ CDN
│   ├── index.html               # หน้า Showcase ดูตัวอย่างสี ฟอนต์ และ Component
│   ├── denla-tokens.css         # CSS Variables (:root) + Google Font Prompt (ปลอดภัย 100% สำหรับเว็บเก่า)
│   ├── denla-theme.css          # Stylesheet หลัก + Component classes (.denla-*)
│   ├── denla-tailwind-cdn.js    # Config สำหรับ Tailwind CDN (Apps Script / Static HTML)
│   ├── denla-tailwind-v4.css    # @theme สำหรับ Tailwind CSS v4 (Next.js 15+ / Vite)
│   └── _headers                 # CORS & Cache headers สำหรับ Cloudflare Pages
├── packages/
│   └── tailwind-preset.js       # Tailwind CSS v3 Preset สำหรับ React / Next.js / Vue
├── tokens/
│   └── design-tokens.json       # Design Tokens กลาง (JSON) สำหรับขยายไป Mobile/Flutter/Figma
├── templates/
│   └── appscript-starter.html   # เทมเพลตเริ่มต้นสำหรับ Google Apps Script / HTML
├── antigravity-skill/
│   └── SKILL.md                 # Skill สำหรับ Antigravity (Sync ไปที่ ~/.gemini/config/skills/denlagroup-theme/)
├── DESIGN_SYSTEM.md             # คู่มือมาตรฐาน Design System ฉบับเต็ม
├── package.json                 # รองรับ npm install จาก Local หรือ GitHub
└── wrangler.toml                # Config สำหรับ Deploy ขึ้น Cloudflare Pages / Workers
```

---

## วิธี Deploy ขึ้น GitHub และ Cloudflare

### 1. เก็บขึ้น GitHub (พร้อมได้ jsDelivr CDN ฟรีทันที)
```bash
cd /Users/administrator/Documents/AntiGravity-App/DenlaGroup-Theme
git init
git add .
git commit -m "feat: initialize DenlaGroup-Theme v1.0.0"
git branch -M main
git remote add origin https://github.com/vicshukornpa/DenlaGroup-Theme.git
git push -u origin main

# สร้าง Tag เวอร์ชัน เพื่อให้เว็บลูกเรียกแบบล็อกเวอร์ชันได้
git tag v1.0.0
git push origin v1.0.0
```
หลัง Push ขึ้น GitHub (Public repo) จะได้ URL CDN จาก jsDelivr อัตโนมัติ:
- `https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.0.0/dist/denla-theme.css`
- `https://cdn.jsdelivr.net/gh/vicshukornpa/DenlaGroup-Theme@v1.0.0/dist/denla-tailwind-cdn.js`

### 2. Deploy ขึ้น Cloudflare Pages (แนะนำ — ฟรี เร็ว รองรับ CORS และ Custom Domain)
**วิธีที่ A — เชื่อม GitHub กับ Cloudflare Pages (Auto-deploy ทุกครั้งที่ push):**
1. เข้า Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. เลือก Repo `DenlaGroup-Theme`
3. ตั้งค่า Build output directory เป็น **`dist`** (ไม่ต้องใส่ Build command)
4. กด Deploy → จะได้ URL เช่น `https://denlagroup-theme.pages.dev` (หรือผูกโดเมนเช่น `theme.denlagroup.com`)

**วิธีที่ B — Deploy ผ่าน CLI จากเครื่องโดยตรง:**
```bash
npx wrangler pages deploy dist --project-name=denlagroup-theme
```

---

## วิธีนำไปใช้งานในแต่ละโปรเจกต์

### 1. Google Apps Script / Static HTML / PHP (ผ่าน CDN)
```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://denlagroup-theme.pages.dev/denla-tailwind-cdn.js"></script>
<link rel="stylesheet" href="https://denlagroup-theme.pages.dev/denla-theme.css">
```

### 2. React / Next.js / Vue / Vite (Tailwind v3)
ติดตั้งจาก Local หรือ GitHub:
```bash
# จากเครื่อง (Local)
npm install file:../DenlaGroup-Theme

# หรือจาก GitHub
npm install github:vicshukornpa/DenlaGroup-Theme#v1.0.0
```
ตั้งค่าใน `tailwind.config.js`:
```js
import denlaPreset from 'denlagroup-theme/tailwind-preset';

export default {
  presets: [denlaPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx,vue,html}'],
};
```
และ import CSS ในไฟล์หลัก (`main.tsx` / `layout.tsx`):
```ts
import 'denlagroup-theme/theme.css';
```

### 3. Next.js 15+ / Vite (Tailwind v4)
ในไฟล์ `globals.css`:
```css
@import "tailwindcss";
@import "denlagroup-theme/tailwind-v4";
@import "denlagroup-theme/theme.css";
```

### 4. ปรับโฉมเว็บเก่า (Retrofit without breaking)
โหลดเฉพาะ `denla-tokens.css` เพื่อนำ CSS Variables (`var(--denla-navy)`, `var(--denla-gold)`, `var(--denla-font-sans)`) ไปค่อยๆ แทนที่สีเดิมโดยไม่กระทบ Layout เดิม
