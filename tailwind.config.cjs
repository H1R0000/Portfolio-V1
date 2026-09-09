/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', 'system-ui', 'sans-serif'],
      },
      colors: {
        light: {
          bg: '#FFFFFF',
          card: '#F5F5F5',
          border: '#E5E7EB',
          textMain: '#111827',
          textMuted: '#4B5563'
        },
        dark: {
          bg: '#000000',
          card: '#1E1E1E',
          cardHover: '#242424',
          border: '#121212',
          textMain: '#FFFFFF',
          textMuted: '#E5E7EB'
        }
      }
    },
  },
  plugins: [],
}