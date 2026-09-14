/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f3f5f8',
          100: '#e6ebf1',
          200: '#cdd6e2',
          700: '#2a3a52',
          800: '#1c283b',
          900: '#141c2b',
          950: '#0b1018',
        },
        signal: {
          300: '#7dd3e8',
          400: '#38b6d4',
          500: '#1a9bb8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      letterSpacing: { widestx: '0.2em' },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
