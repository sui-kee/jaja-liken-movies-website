/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
      'kanit':'Kanit',
      'head':'Chakra Petch'
    },
    backgroundImage:{
      'headCover':"url('/blackholeL.png')"
    },
    height: {
      '103': '453px',
    },
    width:{
      '78':"310px"
    }
  },
  },
  plugins: [],
};
