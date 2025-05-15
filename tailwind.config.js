const { Outfit } = require("next/font/google");

module.exports = {
content: [
  "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./src/app/**/*.{js,ts,jsx,tsx}",
],

  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '2a004a',
        darkTheme: '#11001F',
      },
      fontFamily : {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      }
    },
  },
  plugins: [],
};
