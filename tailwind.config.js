/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       'lighterGreen': 'hsl(148, 38%, 91%)',
       'mediumGreen': 'hsl(169, 82%, 27%)',
       'red': 'hsl(0, 66%, 54%)',
       'white': 'hsl(0, 0%, 100%)',
       'mediumGrey': 'hsl(186, 15%, 59%)',
       'darkerGrey': ' hsl(187, 24%, 22%)'

      }
    },
  },
  plugins: [],
}

