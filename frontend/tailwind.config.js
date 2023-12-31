/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pd-green': '#058C6F',
        'pd-amber': "#FEBf00"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

