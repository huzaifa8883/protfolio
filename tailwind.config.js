/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"'],
        sansing: ['"Saira Condensed", "sans-serif"'],
        manrope: ['Manrope', 'sans-serif'],
        helveticaLight: ['"Helvetica Neue-Light"', 'Arial', 'sans-serif', 'Manrope'], 
        montserrat: ['Montserrat', 'sans-serif',],
        roboto: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'], // Adding Open Sans to sans font family
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideInLeft: "slideInLeft 1s ease-in-out",
        bounceIn: "bounceIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.1)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      }, // Close the keyframes object
    }, // Close the extend object
  },
  plugins: [],
}
