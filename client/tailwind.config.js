/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pri1: "#4C4556",
        pri2: "#872642",
        sec1: "#F6C026",
        sec2: "#A0D3F9",
        sec3: "#dfdee0",
        sec4: "#c9c5c9"
      },
    },
  },
  plugins: [],
};
