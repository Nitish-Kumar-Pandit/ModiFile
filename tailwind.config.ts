import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-gentle': 'float-gentle 8s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-shift': 'gradient-shift 10s ease infinite',
        'gradient-text': 'gradient-text 4s ease infinite',
        'orbit-1': 'orbit-1 20s linear infinite',
        'orbit-2': 'orbit-2 25s linear infinite',
        'orbit-3': 'orbit-3 30s linear infinite',
        'orbit-4': 'orbit-4 22s linear infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-10px) translateX(5px)' },
          '66%': { transform: 'translateY(5px) translateX(-3px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-text': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-x': {
          '0%, 100%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
        },
        'orbit-1': {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'orbit-2': {
          '0%': { transform: 'rotate(90deg) translateX(120px) rotate(-90deg)' },
          '100%': { transform: 'rotate(450deg) translateX(120px) rotate(-450deg)' },
        },
        'orbit-3': {
          '0%': { transform: 'rotate(180deg) translateX(80px) rotate(-180deg)' },
          '100%': { transform: 'rotate(540deg) translateX(80px) rotate(-540deg)' },
        },
        'orbit-4': {
          '0%': { transform: 'rotate(270deg) translateX(110px) rotate(-270deg)' },
          '100%': { transform: 'rotate(630deg) translateX(110px) rotate(-630deg)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
