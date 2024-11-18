/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {
      colors: {
        "primary-tw": "#FF5C00",
        dark: "#1B1B1E",
      },
      fontSize: {
        head2: "64px",
      },
    },
  },
  plugins: [],
};
