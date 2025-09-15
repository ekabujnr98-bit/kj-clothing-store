/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0b0b0b',
          gold: '#c7a24b',
          neon: '#00a8ff',
          gray: '#1f2124'
        }
      }
    }
  },
  plugins: []
}
