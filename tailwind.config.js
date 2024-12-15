/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: '"Plus Jakarta Sans", serif',
        dmSans: '"DM Sans", serif',
      },
      colors: {
        darkGrey: '#1A1919'
      }
    },
  },
  plugins: [],
};
