/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit", //jit daha hızlı derliyor compile ediyor tailwindi.
  purge:["./src/**/*.vue"],
//  content: [
//   "./index.html",
//   "./src/**/*.{vue,js,ts,jsx,tsx}",
// ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
