const { react } = require("./config");

module.exports = {
  extends: [
    './base.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
    ...react.defaultRule,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
