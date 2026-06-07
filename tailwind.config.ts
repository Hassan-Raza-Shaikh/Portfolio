import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#08070b',
        ink: '#0d0b12',
        paper: '#f5f5fa',
        sand: '#cbcbd6',
        brass: '#ff3b70',      // Vibrant pink mapping
        ember: '#00ff87',      // Neon lime mapping
        jade: '#0ea5e9',       // Sky blue mapping
        accent: '#ff3b70',
        surface: 'rgba(255, 255, 255, 0.03)',
        surfaceStrong: 'rgba(255, 255, 255, 0.07)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
        drift: 'drift 16s ease-in-out infinite',
        shimmer: 'shimmer 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(0, -20px, 0) scale(1.03)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(-1deg) scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
