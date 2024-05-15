/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,ejs}", "./src/**/*.{html,js,ejs}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

