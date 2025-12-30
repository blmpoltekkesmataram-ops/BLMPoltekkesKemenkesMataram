/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0A2540',
        'brand-gold': '#EAC435',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Teko', 'sans-serif'],
      },
    },
  },
  plugins: [],
}