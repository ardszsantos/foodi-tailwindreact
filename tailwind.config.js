/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'buttonGreen': '#39DB4A',
      'backgroundWhite': '#FAFAFA',
      'subText': '#4A4A4A',
      'sectionDscText': '#FF6868',
      'white': '#FFFFFF',
      'muted': '#555555',
      'moreMuted': '#807E7E',
      'cardSubText': '#90BD95'
    },
    extend: {
      screens: {
        'below-xs': { 'max': '475px' },   // Below extra small devices (below 475px)
        'below-sm': { 'max': '640px' },   // Below small devices (below 640px)
        'below-md': { 'max': '768px' },   // Below medium devices (below 768px)
        'below-lg': { 'max': '1024px' },  // Below large devices (below 1024px)
        'below-xl': { 'max': '1280px' },  // Below extra large devices (below 1280px)
        'below-2xl': { 'max': '1593px' }, // Below 2XL devices (below 1536px)
      },
    },
  },
  plugins: [],
}
