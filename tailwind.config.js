/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        sansSecondary: ["Prompt", "sans-serif"],
      },
      colors: {
        red: "#f12924",
        darkRed: "#b34947",
        green: "#24f265",
        darkGreen: "#4c9d66",
        brown: "#734b4b",
        grey: "#3b483f",
      },
    },
  },
  plugins: [],
};
