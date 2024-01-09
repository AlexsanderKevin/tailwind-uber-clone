/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-banner': "url('/src/assets/img/main-banner.png')",
        'secondary-banner': "url('/src/assets/img/secondary-banner.png')",
      }
    },
  },
  plugins: [],
}

