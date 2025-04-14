/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        float: 'float 4s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.6s ease-out',
        'fade-loop': 'fadeLoop 2s ease-in-out infinite',
        'blink-warning': 'blink 1s steps(2, start) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0, 255, 255, 0.4)' },
          '50%': { boxShadow: '0 0 16px rgba(0, 255, 255, 0.8)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        slideIn: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        fadeLoop: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.9' },
        },
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      dropShadow: {
        'glow-cyan': '0 0 10px rgba(0, 255, 255, 0.5)',
        'glow-red': '0 0 10px rgba(255, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
