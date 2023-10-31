import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './components/**/*.{tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      xs: '280px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        gray: {
          DEFAULT: '#E5E5E5',
          light: '#D9D9D9',
        },
        green: {
          DEFAULT: '#156700',
          light: '#B4FCA2',
        },
        white: '#FFF',
        black: '#000',
        red: '#E50E0E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
  },
  },
  plugins: [],
};;;
export default config;
