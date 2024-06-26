
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'almost-white': "hsl(0, 0%, 98%)",
      'medium-gray': "hsl(0, 0%, 41%)",
      'almost-black': "hsl(0, 0%, 8%)",
    },
    extend: {
      fontFamily: {
        sans: ["Epilogue", "sans-serif"]
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
