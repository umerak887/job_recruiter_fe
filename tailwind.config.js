/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#6f2232",
          200: "#950740",
          300: "#c3073f",
        },
        rough_black: "#1a1a1d",
        dark_gray: "#4e4e50",
      },
    },
  },
  plugins: [],
};
