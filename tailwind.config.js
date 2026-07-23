import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        primary: {
          DEFAULT: '#0A3D62',
          50:  '#e8f1f8',
          100: '#c5d9ec',
          200: '#9dbede',
          300: '#74a2d0',
          400: '#558ec5',
          500: '#3679ba',
          600: '#2866a4',
          700: '#1a5088',
          800: '#0e3d6e',
          900: '#0A3D62',
        },
        secondary: {
          DEFAULT: '#F7941D',
          50:  '#fff8ec',
          100: '#ffebc8',
          200: '#ffd48f',
          300: '#ffba56',
          400: '#ffa02d',
          500: '#F7941D',
          600: '#e07a08',
          700: '#b85e06',
          800: '#93490a',
          900: '#783d0c',
        },
        accent: '#22c55e',
      },
      fontFamily: {
        sans:    ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'card':  '0 2px 12px 0 rgba(10,61,98,0.08)',
        'card-hover': '0 8px 32px 0 rgba(10,61,98,0.14)',
        'glow':  '0 0 24px rgba(247,148,29,0.35)',
        'glow-blue': '0 0 24px rgba(10,61,98,0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg,#071e30 0%,#0A3D62 50%,#0d4f7c 100%)',
        'section-gradient': 'linear-gradient(180deg,#f8fafc 0%,#ffffff 100%)',
        'card-gradient': 'linear-gradient(135deg,#f0f7ff 0%,#ffffff 100%)',
      },
      animation: {
        'fade-up':     'fadeUp 0.6s ease both',
        'pulse-slow':  'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':       'float 4s ease-in-out infinite',
        'spin-slow':   'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [forms, typography],
};
