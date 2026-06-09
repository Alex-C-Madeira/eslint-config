export const defaultRule = {
  '@eslint-react/jsx-no-children-prop': 'error',
  '@eslint-react/dom-no-dangerously-set-innerhtml': 'warn',
  '@eslint-react/no-duplicate-key': 'error',
  '@eslint-react/no-missing-key': 'error',
  '@eslint-react/no-nested-component-definitions': 'warn',
  '@eslint-react/dom-no-unknown-property': 'error',
  'jsx-a11y-x/alt-text': [
    'warn',
    {
      elements: ['img'],
      img: ['Image'],
    },
  ],
  'jsx-a11y-x/aria-props': 'warn',
  'jsx-a11y-x/aria-proptypes': 'warn',
  'jsx-a11y-x/aria-unsupported-elements': 'warn',
  'jsx-a11y-x/role-has-required-aria-props': 'warn',
  'jsx-a11y-x/role-supports-aria-props': 'warn',
}
