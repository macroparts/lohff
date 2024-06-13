/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'hero': 'linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://assets.website-files.com/62cbe7468074156bfe6471cd/632b00183bb0bebcce6edff6_hero_01.jpg");'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

