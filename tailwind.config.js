/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#737A91',
        'custom-blue': '#0154AA',
      },
      fontFamily: {
        sans: ['"Neue Haas Grotesk Display Pro"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
