/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: "Oswald",
        barlow: "Barlow",
      },
      colors: {
        primary: "#2FD7D5",
        secondary: "#23D68D",
        third: "#1ED31E",
      },
    },
  },
  plugins: [],
};
