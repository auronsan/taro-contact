module.exports = {
  plugins: {
    'postcss-preset-mantine': {
      features: {
        lightDarkFunction: false,
      },
    },
    'postcss-simple-vars': {
      variables: {
        'breakpoint-md': '62em',
      },
    },
  },
};
