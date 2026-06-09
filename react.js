import eslintReact from '@eslint-react/eslint-plugin'
import jsxA11y from 'eslint-plugin-jsx-a11y-x'
import reactHooks from 'eslint-plugin-react-hooks'

import base from './base.js'
import { prettier, react } from './config.js'

const baseWithoutPrettier = base.filter(
  (config) => !('name' in config) || config.name !== 'wooden-script/prettier',
)

const reactRecommended = eslintReact.configs.recommended
const reactHooksRecommended =
  reactHooks.configs.flat?.recommended ?? reactHooks.configs.recommended
const jsxA11yRecommended = jsxA11y.configs.recommended

export default [
  ...baseWithoutPrettier,
  reactRecommended,
  reactHooksRecommended,
  jsxA11yRecommended,
  {
    name: 'wooden-script/react',
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...react.defaultRule,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettier.config,
]
