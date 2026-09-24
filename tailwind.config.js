/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#050A18',
          900: '#0A1128',
          800: '#0E1A3A',
          700: '#132550',
          600: '#1B3A6B',
          500: '#254A82',
        },
        tech: {
          blue: '#2563EB',
          sky: '#38BDF8',
          cyan: '#22D3EE',
        },
        gold: {
          100: '#FBF3D9',
          200: '#F3E1AC',
          300: '#E8C878',
          400: '#D4AF37',
          500: '#BE9528',
          600: '#9A771E',
        },
        silver: {
          100: '#F2F4F7',
          200: '#D9DEE7',
          300: '#B4BCCB',
          400: '#8B95A7',
        },
      },
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #F3E1AC 0%, #D4AF37 45%, #BE9528 70%, #F3E1AC 100%)',
        'gold-sheen':
          'linear-gradient(110deg, transparent 20%, rgba(251,243,217,0.65) 48%, transparent 76%)',
        'navy-radial':
          'radial-gradient(120% 120% at 50% 0%, #132550 0%, #0A1128 45%, #050A18 100%)',
        'grid-lines':
          'linear-gradient(rgba(148,178,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,178,255,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        glass: '0 8px 40px -12px rgba(2, 6, 23, 0.7)',
        'gold-glow': '0 0 40px -6px rgba(212, 175, 55, 0.55)',
        'blue-glow': '0 0 50px -8px rgba(37, 99, 235, 0.55)',
        'card-hover': '0 30px 60px -20px rgba(2, 6, 23, 0.85)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-22px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
      },
    },
  },
  plugins: [],
}
