/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#C1282D",
        secondary: "#FBB03C",
        darkColor: "#010101",
        lightColor: "#F5F5F5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-section": "url('src/assets/images/websiteplanet-dummy-1280X720.webp')",
      },
    },
  },

  plugins: [],
};
