/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: '#3D81E3',
        primary: {
          50: '#e8f0fe',
          100: '#c5d9fc',
          200: '#9dbdf9',
          300: '#6ea0f5',
          400: '#4a88f0',
          500: '#3D81E3',
          600: '#2b65c0',
          700: '#1e4a9a',
          800: '#133270',
          900: '#0a1f4a',
        },
        accent: {
          50: '#e0f9ff',
          100: '#b3f0fd',
          200: '#80e6fa',
          300: '#4ddcf7',
          400: '#00d2ff',
          500: '#00b8e6',
        },
        surface: {
          0: '#0c0c0c',
          1: '#0e1014',
          2: '#131519',
          3: '#1a1d22',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        shiny: 'shiny 6s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        shiny: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
