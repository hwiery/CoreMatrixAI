/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './translations/**/*.{js,ts,jsx,tsx}',
      './contexts/**/*.{js,ts,jsx,tsx}',
      './public/**/*.{js,ts,jsx,tsx}',
      './utils/**/*.{js,ts,jsx,tsx}',
      './hooks/**/*.{js,ts,jsx,tsx}',
      './types/**/*.{js,ts,jsx,tsx}',
      './ui/**/*.{js,ts,jsx,tsx}',
      './layouts/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
      './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Apple SD Gothic Neo',
            'Pretendard Variable',
            'Pretendard',
            'Noto Sans KR',
            'SF Pro Display',
            'SF Pro Text',
            'Helvetica Neue',
            'Arial',
            'sans-serif',
          ],
        },
        animation: {
          'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        },
        colors: {
          'black-700': '#1a1a1a',
        },
        keyframes: {
          fadeInUp: {
            '0%': {
              opacity: '0',
              transform: 'translateY(20px)',
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)',
            },
          },
        },
        transitionDelay: {
          '100': '100ms',
          '200': '200ms',
          '300': '300ms',
        }
      },
    },
    plugins: [],
  }