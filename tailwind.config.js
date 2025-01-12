/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        img1: "url('/public/images/bgimg.jpg')",
        img2: "url('/public/images/bging10.webp')",
      },
    },
  },
  plugins: [],
};
