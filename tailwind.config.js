/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chess: {
          white: '#f3f4f6', // Light gray/off-white for board/backgrounds
          black: '#111827', // Deep dark gray/almost black
          gray: '#374151',
          accent: '#9ca3af'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
