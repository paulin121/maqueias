/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        accent: '#8B0000',
      }
    },
  },
  plugins: [],
}