import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          DEFAULT: '#0d3d1f',
          medio: '#1a5c30',
          claro: '#2d8a4e',
        },
        dourado: {
          DEFAULT: '#c9a227',
          claro: '#e8c547',
          escuro: '#9a7a18',
        },
        preto: {
          DEFAULT: '#0a0a0a',
          fosco: '#111111',
        },
        cinza: {
          DEFAULT: '#2a2a2a',
          escuro: '#1c1c1c',
        },
        creme: '#faf6ee',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 1s ease forwards',
        'fade-down': 'fadeDown 1s ease forwards',
        'pulse-gold': 'pulseGold 1.5s ease-in-out infinite',
        'blink-dot': 'blinkDot 1.5s ease infinite',
        'scroll-pulse': 'scrollPulse 2s ease infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'slide-sponsors': 'slideSponsors 25s linear infinite',
        'float-particle': 'floatParticle linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        blinkDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0', transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { opacity: '1', transform: 'scaleY(1)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        slideSponsors: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatParticle: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-100px) translateX(var(--drift, 0))', opacity: '0' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(201,162,39,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.04) 1px, transparent 1px)',
        'diagonal-lines':
          'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201,162,39,0.03) 30px, rgba(201,162,39,0.03) 31px)',
      },
      backgroundSize: {
        grid: '60px 60px',
      },
    },
  },
  plugins: [],
};

export default config;
