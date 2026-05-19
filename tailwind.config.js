/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FDF3DF',
          dark: '#FAEDD4',
          light: '#FCF5E2',
          lightest: '#FCF6E8',
        },
        martini: {
          DEFAULT: '#AF9B3F',
          dark: '#98852F',
          light: '#B9A753',
          lightest: '#C5B364',
        },
        rust: {
          DEFAULT: '#AA462B',
          dark: '#9A351C',
          deep: '#201B1D',
          light: '#C7553A',
        },
        violet: {
          DEFAULT: '#3B174E',
          dark: '#2D0D3D',
          light: '#572C66',
          lightest: '#6D457C',
        },
        chocolate: {
          DEFAULT: '#130D11',
          darker: '#0A0609',
          rust: '#201B1D',
          gray: '#2D292A',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
