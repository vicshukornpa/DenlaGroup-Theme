/**
 * DenlaGroup-Theme — Tailwind CDN Runtime Config
 * Version: 1.0.0
 *
 * Load right after <script src="https://cdn.tailwindcss.com"></script>
 * Exposes both `denla.*` (recommended) and `dbs.*` (legacy alias) color palettes.
 */
(function () {
  var brandColors = {
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

  var denlaConfig = {
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
      },
    },
  };

  if (typeof window !== 'undefined' && window.tailwind) {
    window.tailwind.config = denlaConfig;
  } else if (typeof tailwind !== 'undefined') {
    tailwind.config = denlaConfig;
  }
})();
