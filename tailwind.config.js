// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'host': ['"Host Grotesk"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
