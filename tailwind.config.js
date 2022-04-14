module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          300: "#FFB354",
          400: "#EE7A3A",
          500: "#ED7839",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        quicksand: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        r: "0 0 60px 0 rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
