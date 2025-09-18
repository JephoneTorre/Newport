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
        lightHover: '#f9ecfeff',
        darkHover: '#464448ff',
        darkTheme: '#000000ff',
      },
      fontFamily : {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: "selector",
  darkMode: "class",

  plugins: [],
};
