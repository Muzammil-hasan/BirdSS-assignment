/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'ui-sans-serif'],
      },
      width: {
        0.25: '0.05em',
      },
      height: {
        0.25: '0.05em',
      },
      colors: {
        blueDark: '#141E30',
        blueMedium: '#243B55',
        danger: '#950000',
        lightGray: '#8B8C91',
        yellow: '#F9D423',
        orange: '#E65C00',
        whiteTrans: 'rgba(255, 255, 255, 0.2)',
      },
      boxShadow: {
        'outline-sm': '0 0 0 0.05em #ffffff',
        outline: '0 0 0 0.1em #ffffff',
      },
      transitionDuration: {
        400: '400ms',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      borderWidth: {
        0.5: '0.05em',
        1: '0.1em',
        1.5: '0.15em',
      },
    },
  },
  plugins: [],
};
