import wooden from './index.js'

export default [
  ...wooden,
  {
    files: ['**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },
]
