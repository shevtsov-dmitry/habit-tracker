/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 'nav-bar': ['NavBarFont', 'sans-serif'],
      },
      screens: {
        laptop: "1700px",
        mobile: "1133px",
      },
      colors: {},
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
