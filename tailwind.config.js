/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7F7F7",
        secondary: "#3A3F47",
        tertiary: "#818996",
        warning: "#f8b501",
        fb: "#4267B2",
        ig : "#C13584",
        linkedin : "#0077b5",
        "black-200": "#090325",
        "white": "#E3E8EB",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    },
  },
  plugins: [],
};
