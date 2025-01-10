/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#158A37",
      milk: "#FFFDFD",
      services: "#158A371A",
      footer: "#BD934B",
      pending: "#D45E00",
      cancel: "#DD2509",
      approved: "#158A37",
      ...colors,
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      poppins: ["'Poppins'", "sans-serif"],
      roboto: ["'Roboto'", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
