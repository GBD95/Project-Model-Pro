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
        "hero-section": "url('/src/assets/images/hero-section-img.webp')",
        "service-0": "url('/src/assets/images/service-prototyping.webp')",
        "service-1": "url('/src/assets/images/service-parts-from-composite-materials.webp')",
        "service-2": "url('/src/assets/images/service-models-tools.webp')",
        "service-3": "url('/src/assets/images/services-small-series.webp')",
        "service-4": "url('/src/assets/images/service-thermo-vacuum.webp')",
        "logo-sigit": "url('/src/assets/images/logo_sigit_top.png')",
        "logo-temp": "url('/src/assets/images/logo_temp.png')",
      },
    },
  },

  plugins: [],
};
