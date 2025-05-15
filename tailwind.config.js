/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EFF4',
          100: '#CCDFE9',
          200: '#99BFD3',
          300: '#669FBD',
          400: '#337FA7',
          500: '#336B87', // Main primary color
          600: '#295667',
          700: '#204048',
          800: '#162B30',
          900: '#0D1518',
        },
        accent: {
          50: '#FEF2E4',
          100: '#FDE5C9',
          200: '#FBCB93',
          300: '#F9B15D',
          400: '#F7A748',
          500: '#F49D37', // Main accent color
          600: '#C37D2C',
          700: '#925E21',
          800: '#613E16',
          900: '#311F0B',
        },
        slate: {
          50: '#E6E7E9',
          100: '#CDD0D4',
          200: '#9BA1A9',
          300: '#69727E',
          400: '#374353',
          500: '#2F3542', // Main slate color
          600: '#262A35',
          700: '#1C2028',
          800: '#13151B',
          900: '#09090E',
        },
        success: {
          50: '#E3F5E6',
          100: '#C7EBCD',
          200: '#8FD69B',
          300: '#57C169',
          400: '#37AD4A',
          500: '#2C8C3C', // Main success color
          600: '#297035',
          700: '#1B4B23',
          800: '#123017',
          900: '#09180C',
        },
        warning: {
          50: '#FFF7E6',
          100: '#FEEFC9',
          200: '#FEDF94',
          300: '#FDCF5F',
          400: '#FCBF2A',
          500: '#FDBE2D', // Main warning color
          600: '#CA9824',
          700: '#97721B',
          800: '#654C12',
          900: '#322609',
        },
        error: {
          50: '#FDEDED',
          100: '#FADADA',
          200: '#F5B5B5',
          300: '#F09090',
          400: '#EB6B6B',
          500: '#E54646', // Main error color
          600: '#B73838',
          700: '#892A2A',
          800: '#5C1C1C',
          900: '#2E0E0E',
        },
      },
      fontFamily: {
        sans: [
          'Poppins',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-soft': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};