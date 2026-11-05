/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand:    "#b35b6d",
        "brand-light": "#fdebf4",
        "brand-border": "#da9b8f",
        "sidebar-bg":   "#fdebf4",
        "text-main":    "#364153",
        "text-sub":     "#515050",
      },
      fontFamily: {
        roboto: ["Roboto", "Arial", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
