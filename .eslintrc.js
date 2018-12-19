module.exports = {
  extends: ['airbnb','prettier','plugin:compat/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/prop-types': 0,
    'import/no-unresolved': [2, { ignore: ['^@/', '^umi/'] }],
  },
};
