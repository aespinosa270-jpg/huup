/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#09090b',
          card: '#18181b',
          primary: '#f97316',
          secondary: '#ea580c',
          text: '#a1a1aa',
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
      // -------------------
    },
  },
  plugins: [],
};