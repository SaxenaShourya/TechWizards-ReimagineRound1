/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          1: "#f5f5f5",
          2: "#e5e5e5",
          3: "#cacacb",
        },
        dark: { 1: "#1f1f1f", 2: "#111111" },
        green: "#d8f288",
      },
      fontFamily: {
        futura: ["Futura", "sans-serif"],
        futuraCondensed: ["FuturaCondensed", "sans-serif"],
        futuraExtraBold: ["FuturaExtraBold", "sans-serif"],
        foundersGrotesk: ["FoundersGrotesk", "sans-serif"],
        apercuRegular: ["ApercuRegular", "sans-serif"],
      },
      screens: {
        xs: "340px",
      },
    },
  },
  plugins: [],
};
