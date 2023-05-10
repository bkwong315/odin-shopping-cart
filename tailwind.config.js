module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      animation: {
        'fade-grow': 'fade-grow 300ms linear forwards',
        'fade-out': 'fade-out 300ms linear forwards',
        'height-grow-container': 'height-grow-container 800ms linear forwards',
        'height-grow-icon': 'height-grow-icon 800ms linear forwards',
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
        'height-grow-container': {
          '0%': {
            'max-height': 0,
          },
          '100%': {
            'max-height': '12rem',
          },
        },
        'height-grow-icon': {
          '0%': {
            'max-height': 0,
            padding: 0,
          },
          '100%': {
            'max-height': '12rem',
            padding: '1rem',
          },
        },
      },
    },
    fontFamily: {
      'klavika-medium': ['klavika-medium', 'arial', 'sans-serif'],
      'noto-sans-medium': ['NotoSans-medium', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
