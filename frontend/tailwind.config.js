/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bluesky: "#8DC4D8",
        bodybackground: "#F2F2F2",
        navbartext: "#999999",
        navbartextchange: "#717171",
      },

      fontFamily: {
        amazon: "AmazonEmber",
        amazonbold: "AmazonEmberBold",
      },
    },
  },
  plugins: [],
};
