/**
 * DenlaGroup-Theme — Tailwind CSS v3 Preset
 * Version: 1.0.0
 *
 * Usage in tailwind.config.js / tailwind.config.ts:
 *   import denlaPreset from 'denlagroup-theme/tailwind-preset';
 *   export default {
 *     presets: [denlaPreset],
 *     content: ['./src/**\/*.{js,ts,jsx,tsx,vue,html}'],
 *   };
 */

const brandColors = {
  navy: '#0f2c59',
  navydark: '#0a1f40',
  blue: '#1d4ed8',
  blueaccent: '#1740a5',
  gold: '#B89047',
  goldlight: '#dfc08a',
  golddark: '#936e2f',
  bg: '#f8fafc',
  slate: '#1e293b',
  softblue: '#b7cbe3',
  softbluelight: '#c2d9e7',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Prompt', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        denla: brandColors,
        dbs: brandColors,
      },
      boxShadow: {
        premium: '0 10px 30px -10px rgba(15, 44, 89, 0.08)',
      },
      backgroundImage: {
        'denla-hero': 'linear-gradient(135deg, #0f2c59 0%, #1d4ed8 100%)',
        'denla-soft': 'linear-gradient(135deg, #b7cbe3 0%, #c2d9e7 100%)',
        'denla-gold': 'linear-gradient(135deg, #B89047 0%, #936e2f 100%)',
      },
    },
  },
};
