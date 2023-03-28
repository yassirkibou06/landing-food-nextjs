/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'first': '#5DC4B8',
        'second': '#EF633E',
        'third': '#FCEEE9',
        'fourth': 'rgba(93, 196, 184, 0.500198)',
        'fifth': '#EFA322',
        'p-color': 'rgba(51, 51, 51, 0.5)',
        'menu-clr': '#333333'
      },
      backgroundImage: {
        'hero': "url('/public/images/Object.png')",
        'gradient-radial': 'linear-gradient(133.44deg, #FCEEE9 17.94%, #ECF8F8 85.2%)',
        'gradient-one': 'linear-gradient(180deg, #61C3B8 0%, #5DC4B8 100%)',
        'gradient-two': 'linear-gradient(180deg, #F89C72 0%, #EF633E 100%)',
        'gradient-three': 'linear-gradient(180deg, #FFF0EC 0%, #FFDDD4 100%)',
        'gradient-four': 'linear-gradient(180deg, #E4FFFC 0%, #C5FFF8 100%)',
        'gradient-five': 'linear-gradient(180deg, #FFF8EC 0%, #FFEFD4 100%)',
        'gradient-six': 'linear-gradient(135deg, #FCEEE9 0%, #ECF8F8 100%);'
      },
      boxShadow: {
        'one' : '0px 24px 48px rgba(0, 24, 52, 0.080899)',
        'two': ' 0px 16px 24px rgba(0, 24, 52, 0.08)',
        'three': '0px 8px 48px rgba(0, 24, 52, 0.080899)'
      } ,
      borderRadius: {
        'one': '100px 24px 24px 24px',
        'two': '24px 24px 100px 24px',
        'three': ' 24px 0px 0px 100px',
        'four': '24px 100px 24px 24px',
        'five': '24px 24px 24px 100px',
        'six': ' 50px 24px 24px 24px',
        'seven': '0px 24px 100px 0px'
      }
    },
    fontFamily: {
      'Arabic': ['IBM Plex Sans Arabic', 'sans-serif'],
    }
  },
  plugins: [],  
}
