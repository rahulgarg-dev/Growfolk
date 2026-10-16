const c = (v) => `rgb(var(${v}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: c('--bg'),
        surface: c('--surface'),
        surface2: c('--surface2'),
        'surface-card': c('--surface-card'),
        brand: c('--brand'),
        brand2: c('--brand2'),
        'brand-light': c('--brand-light'),
        accent: c('--accent'),
        ink: c('--ink'),
        muted: c('--muted'),
        'nav-ink': c('--nav-ink'),
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(52, 211, 153, 0.3)',
        'glow-lg': '0 0 45px -5px rgba(52, 211, 153, 0.45)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};
