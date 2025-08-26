/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./index.html",
    "./app.js"
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors matching the existing design system
        'portfolio': {
          'bg': '#000000',
          'text-primary': '#ffffff',
          'text-secondary': '#cccccc',
          'accent': '#FACC15',
          'accent-hover': '#FACC15',
        },
        'teal': {
          300: 'rgba(50, 184, 198, 1)',
          400: 'rgba(45, 166, 178, 1)',
          500: 'rgba(33, 128, 141, 1)',
          600: 'rgba(29, 116, 128, 1)',
          700: 'rgba(26, 104, 115, 1)',
          800: 'rgba(41, 150, 161, 1)',
        },
        'slate': {
          500: 'rgba(98, 108, 113, 1)',
          900: 'rgba(19, 52, 59, 1)',
        },
        'charcoal': {
          700: 'rgba(31, 33, 33, 1)',
          800: 'rgba(38, 40, 40, 1)',
        },
        'cream': {
          50: 'rgba(252, 252, 249, 1)',
          100: 'rgba(255, 255, 253, 1)',
        },
        'brown': {
          600: 'rgba(94, 82, 64, 1)',
        }
      },
      fontFamily: {
        'base': ['"FKGroteskNeue"', '"Geist"', '"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        'mono': ['"Berkeley Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        'display': ['"Alfa Slab One"', '"Rockwell"', 'serif'],
        'serif': ['Georgia', 'serif'],
        'cursive': ['"Comic Sans MS"', 'cursive', 'sans-serif'],
      },
      fontSize: {
        'xs': '11px',
        'sm': '12px',
        'base': '14px',
        'md': '14px',
        'lg': '16px',
        'xl': '18px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '30px',
      },
      spacing: {
        '0': '0',
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
      },
      borderRadius: {
        'sm': '6px',
        'base': '8px',
        'md': '10px',
        'lg': '12px',
        'full': '9999px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in-up-delayed': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
        'fade-in-up-delayed-2': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both',
        'shine': 'shine 1.75s linear infinite',
        'dot-fill-1': 'dotFill1 3s infinite',
        'dot-fill-2': 'dotFill2 3s infinite',
        'dot-fill-3': 'dotFill3 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        dotFill1: {
          '0%, 10%': { color: 'white' },
          '10%, 20%': { color: '#FACC15' },
          '20%, 60%': { color: 'white' },
          '60%, 70%': { color: '#FACC15' },
          '70%, 100%': { color: 'white' },
        },
        dotFill2: {
          '0%, 15%': { color: 'white' },
          '15%, 25%': { color: '#FACC15' },
          '25%, 65%': { color: 'white' },
          '65%, 75%': { color: '#FACC15' },
          '75%, 100%': { color: 'white' },
        },
        dotFill3: {
          '0%, 20%': { color: 'white' },
          '20%, 30%': { color: '#FACC15' },
          '30%, 70%': { color: 'white' },
          '70%, 80%': { color: '#FACC15' },
          '80%, 100%': { color: 'white' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
