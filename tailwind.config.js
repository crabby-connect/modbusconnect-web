/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e8f4f8",
          100: "#d1e9f1",
          200: "#a3d3e3",
          300: "#75bdd5",
          400: "#47a7c7",
          500: "#2f6690",
          600: "#265273",
          700: "#1d3e56",
          800: "#132a39",
          900: "#0a151c",
        },
      },
    },
  },
  plugins: [],
};
