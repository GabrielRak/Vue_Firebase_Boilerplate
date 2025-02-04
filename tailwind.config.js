export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#F7F7F7',
        'secondary': '#374AF2',
        'tertiary': '#3A2FA1'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #374AF2 0%, #3A2FA1 100%)',
        'gradient-secondary': 'linear-gradient(90deg, #141414 0%, #101010 100%)',
        'gradient-tertiary': 'linear-gradient(90deg, #101010 0%, #670BFF 100%)',
      },
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


//Define all the varialbes after finishing the figma design, no other way around