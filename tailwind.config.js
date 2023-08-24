/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Public Sans", "sans-serif"],
    },
    extend: {
      colors: {
        text: {
          primary: "#212B36",
          secondary: "#637381",
        },
      },
    },
  },
  plugins: [],
};
