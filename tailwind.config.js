module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      animation: {
        'fade-grow': 'fade-grow 300ms linear forwards',
        'fade-out': 'fade-out 300ms linear forwards',
      },
      keyframes: {
        'fade-grow': {
          '0%': {
            height: '75%',
          },
          '50%': {
            height: '100%',
          },
          '100%': {
            height: '100%',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '100%',
            height: '100%',
          },
          '50%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
            height: '75%',
          },
        },
      },
    },
    fontFamily: {
      'klavika-medium': ['klavika-medium', 'arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
