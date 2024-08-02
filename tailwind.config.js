// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        customBlue5: "#2358A8",
        customBlue: '#041348', 
        customTeal: '#427685',
        customBlue1: "#329BC4",
        customBlue2: "#8E8EDB",
        customBlue3: "#4A5293",
        customBlue4: "#041348",
        customBlue6: "#73B0C8"

      },
      fontFamily: {
        outfit: ['Outfit', ],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

