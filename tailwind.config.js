/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F0114',
        accent: '#62D732',
        accentDark: '#309C04',
        accentYellow: '#FFEE60',
        accentOrange: '#CB661F',
        accentRed: '#FC6745',
        accentBrown: '#76332C',
        accentLight: '#FFEED6',
        accentGold: '#FFE598',
        accentPurple: '#812F45',
        accentGray: '#A2A6A9',
        accentWhite: '#FFFFFF',
        accentBlack: '#000000',
        accentShadow: '#B49061',
        accentText: '#5D1D2D',
        accentGreen: '#53942E',
        accentBlue: '#65FF00',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sigmar: ['Sigmar', 'cursive'],
      },
      boxShadow: {
        accent: '0px 4px 0px #309C04',
        accentBrown: '0px 4px 0px #381200',
        accentGold: '0px 4px 0px #FFEE60',
      },
      borderRadius: {
        xl: '20px',
        lg: '17px',
      },
    },
  },
  plugins: [],
}
