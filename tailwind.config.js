/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens : {
        'vsm' : '440px',
      }
    },
  },
  plugins: [],
}

