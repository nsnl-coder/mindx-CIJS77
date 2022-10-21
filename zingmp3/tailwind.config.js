/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    container: {
      maxWidth: '100%',
      center: true,
      padding: '12px',
      screens: {
        xs: '100%',
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        xxl: '1200px',
      },
    },
    extend: {
      colors: {
        heading: '#292929',
        accent: '#ee3333',
        'gray-bg': '#f4f4f4',
        'gray-text': '#707070',
        'gray-light': '#929292',
        'gray-border': '#ebebeb',
      },
      boxShadow: {
        all: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      },
    },
  },
  plugins: [],
}
