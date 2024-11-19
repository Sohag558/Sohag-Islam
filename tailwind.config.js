module.exports = {
    theme: {
      extend: {
        animation: {
          slideInRightToLeft: 'slideInRightToLeft 1s ease-out forwards',
        },
        keyframes: {
          slideInRightToLeft: {
            '0%': { transform: 'translateX(100%)', opacity: 0 },
            '100%': { transform: 'translateX(0)', opacity: 1 },
          },
        },
      },
    },
  };
  