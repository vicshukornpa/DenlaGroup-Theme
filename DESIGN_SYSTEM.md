# DenlaGroup-Theme — Frontend Design System Standard

> มาตรฐานหน้าบ้าน (Frontend Design System) ส่วนกลางของ **Denla Group** สกัดจากต้นแบบ Denla Future Forum ออกแบบให้ใช้ได้ทั้ง **Google Apps Script**, **Static HTML**, **React / Next.js / Vue / Vite** และนำกลับไป **Retrofit (ปรับโฉม)** เว็บแอปที่พัฒนาไปแล้วได้โดยไม่ทำลายโครงสร้างเดิม

---

## 1. Color Palette (โทนสี Executive Navy & Gold)

| Token | CSS Variable | Tailwind Class (`denla-*` / `dbs-*`) | Hex | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Navy (Primary)** | `--denla-navy` | `denla-navy` | `#0f2c59` | สีหลัก Header/Footer, หัวข้อหลัก, Focus border |
| **Navy Dark** | `--denla-navy-dark` | `denla-navydark` | `#0a1f40` | Hover state ของปุ่ม Navy |
| **Hero Blue** | `--denla-blue` | `denla-blue` | `#1d4ed8` | ปลาย Gradient ของ Hero Banner |
| **Blue Accent** | `--denla-blue-accent` | `denla-blueaccent` | `#1740a5` | กล่องไฮไลต์พิเศษ (เช่น Moderator/Notice) |
| **Gold (Accent)** | `--denla-gold` | `denla-gold` | `#B89047` | ปุ่ม CTA หลัก, เส้นใต้ Active Tab, Divider |
| **Gold Light** | `--denla-gold-light` | `denla-goldlight` | `#dfc08a` | ข้อความไฮไลต์ & ไอคอนบนพื้น Navy |
| **Gold Dark** | `--denla-gold-dark` | `denla-golddark` | `#936e2f` | Hover state ของปุ่ม Gold |
| **Canvas BG** | `--denla-bg` | `denla-bg` | `#f8fafc` | พื้นหลังหน้าเว็บ (Slate-50) |
| **Surface** | `--denla-surface` | `white` | `#ffffff` | การ์ดเนื้อหา, Navbar |
| **Text Primary** | `--denla-text-primary` | `denla-slate` | `#1e293b` | ข้อความหลัก (Slate-800) |
| **Text Secondary** | `--denla-text-secondary` | `slate-600` | `#475569` | เนื้อหาย่อหน้า |
| **Text Muted** | `--denla-text-muted` | `slate-500` | `#64748b` | Label, Caption, Inactive Tab |
| **Soft Blue Card** | `--denla-gradient-soft-blue` | `.denla-card-soft` | `#b7cbe3 → #c2d9e7` | การ์ดรายการเด่น / Session / KPI |

---

## 2. Typography (ฟอนต์)

- **Primary Font**: `'Prompt', sans-serif` (Google Fonts น้ำหนัก `300, 400, 500, 600, 700` + Italic `300, 400`)
- **Scale & Hierarchy**:
  - **Hero Title**: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`
  - **Section Heading**: `text-2xl md:text-3xl font-bold text-denla-navy` + `<div class="denla-divider mx-auto"></div>`
  - **Card Heading**: `text-xl font-bold text-denla-navy leading-snug`
  - **Eyebrow / Brand Tag**: `text-[9px]`–`text-xs font-bold uppercase tracking-widest text-denla-gold`
  - **Body Copy**: `leading-relaxed` (1.625) เพื่อให้อ่านภาษาไทยไม่อึดอัด

---

## 3. Layout & Spacing Standard

- **Page Shell**: `<body class="denla-theme min-h-screen flex flex-col justify-between">`
- **Sticky Header**: `.denla-header` (`h-20`, `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)
  - โลโก้ + เส้นคั่น `border-l border-slate-200 pl-3.5` + ชื่อแอป + Tagline
  - Tab navigation ใช้ `.denla-tab-active` (ขีดเส้นใต้สีทอง `3px solid #B89047`)
- **Main Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12` และเว้นระยะ Section ด้วย `space-y-12`
- **Footer**: `.denla-footer` (`bg-denla-navy text-white py-12 mt-12`)

---

## 4. Component Classes Reference

| Class | รายละเอียด |
| :--- | :--- |
| `.denla-theme` | ใส่ที่ `<body>` หรือ container หลัก เพื่อเปิดใช้พื้นหลัง `#f8fafc`, สีตัวอักษร `#1e293b` และฟอนต์ `Prompt` |
| `.denla-hero` | พื้นหลัง Gradient `#0f2c59 → #1d4ed8` + ตัวอักษรขาว (ใช้คู่ `rounded-3xl overflow-hidden denla-shadow-premium`) |
| `.denla-glass` | กล่อง Glassmorphism บน Hero (`bg-white/10 backdrop-blur-md border-white/14 rounded-2xl`) |
| `.denla-card` | การ์ดขาวมุมโค้ง `rounded-3xl` + `border-slate-100` + `shadow-premium` |
| `.denla-card-soft` | การ์ดไล่สีฟ้าอ่อน + hover ยกตัวขึ้นเล็กน้อย (`-translate-y-0.5`) |
| `.denla-btn-primary` | ปุ่ม CTA ทรง Pill สีทอง `#B89047` พร้อมเงาและ hover lift |
| `.denla-btn-navy` | ปุ่ม Action ทรง Pill สีน้ำเงินเข้ม `#0f2c59` |
| `.denla-btn-outline` | ปุ่มขอบ Navy ทรง Pill (Hover เปลี่ยนพื้นเป็น Navy) |
| `.denla-input` | ช่องกรอกฟอร์มมาตรฐาน (`rounded-lg`, focus border navy + ring) |
| `.denla-tab-active` | สถานะ Active ของ Tab (เส้นใต้สีทอง 3px + ตัวอักษร Navy) |
| `.denla-divider` | เส้นคั่นสั้นสีทองใต้หัวข้อ (`w-16 h-1 bg-denla-gold rounded-full`) |
| `.denla-badge-glass` | ป้าย Pill โปร่งแสงสำหรับวางบน Hero |

---

## 5. Retrofitting Existing Web Apps (การนำไปปรับเข้ากับเว็บเก่า)

1. **เริ่มต้นแบบปลอดภัย 100% (Zero Breaking Changes)**: โหลดเฉพาะ `denla-tokens.css` ก่อน เพื่อใช้ CSS Variables (`var(--denla-navy)`, `var(--denla-gold)`, `var(--denla-font-sans)`) ในส่วนที่ต้องการเปลี่ยนทีละหน้า
2. **อัปเกรดทีละ Component**: โหลด `denla-theme.css` แล้วเติมคลาส `.denla-header`, `.denla-card`, `.denla-btn-primary`, `.denla-input` เฉพาะจุดที่ต้องการปรับ โดยไม่ต้องใส่ `.denla-theme` ที่ `<body>` จนกว่าจะพร้อมเปลี่ยนทั้งเว็บ
3. **ย้ายเข้า Tailwind Preset**: ถ้าเว็บเก่าใช้ Tailwind v3/v4 อยู่แล้ว ให้เพิ่ม `denlaPreset` ใน `tailwind.config.js` (หรือ `@import "denlagroup-theme/tailwind-v4"`) แล้วทยอยแทนที่สีเดิมด้วย `bg-denla-navy`, `bg-denla-gold`, `text-denla-slate`
