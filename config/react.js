const defaultRule = {
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/self-closing-comp': 'error',
  'react/no-unknown-property': 'error',
  'jsx-a11y/aria-props': 'warn',
  'jsx-a11y/aria-proptypes': 'warn',
  'jsx-a11y/role-supports-aria-props': 'warn',
  'jsx-a11y/aria-unsupported-elements': 'warn',
  'jsx-a11y/role-has-required-aria-props': 'warn',
  'jsx-a11y/alt-text': [
    'warn',
    {
      elements: ['img'],
      img: ['Image']
    }
  ]
}

module.exports = {
  defaultRule
}
