/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1100px',
        '2lx': '1100px',
      },
    },
    extend: {},
  },
  plugins: [],
};
