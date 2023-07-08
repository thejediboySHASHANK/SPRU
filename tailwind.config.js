/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#0A4E35',
        dark: '#0E382C',
      },
    },
  },
  plugins: [],
}

// #006241