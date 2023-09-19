/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        univers: "universthin_ultra_condensed",
        avenir: "avenir_next_lt_proregular",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
