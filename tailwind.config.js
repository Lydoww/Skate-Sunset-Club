const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oswald", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      screens: {
        "custom-arrow-bottom": "1562px",
        "custom-arrow-sides": "1500px",
        "custom-gap": "1480px",
        "custom-product-spacing": "1364px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
});
