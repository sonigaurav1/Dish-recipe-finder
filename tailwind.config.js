/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#f60",
      },
      width: {
        HotRecipeHeight: "80vh",
        HotRecipeWidth: "55%",
        HotRecipeImageWidth: "45%",
      },
    },
  },
  plugins: [],
};
