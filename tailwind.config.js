/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage:{
            'backgroundMobile': "url('/assets/home/background-home-mobile.jpg')",
            'backgroundTablet': "url('/assets/home/background-home-tablet.jpg')",
            'backgroundDesktop': "url('/assets/home/background-home-desktop.jpg')",
        },
      fontFamily: {
        'sans': ['Bellefair', ...defaultTheme.fontFamily.sans]
      },
      spacing:{
        'mobile-header': '44px'
      },
      screens:{
          'mobile': '375px',
          'tablet': '768px',
          'desktop': '900px'

      },
      transitionDuration:{
        '60': '60ms'
      },
      colors:{
        'spaceBlack': '#0B0D17'
      }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}