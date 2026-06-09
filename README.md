![Wooden Script - ESLint config](https://github.com/Alex-C-Madeira/eslint-config/blob/main/assets/wooden-script_eslint-config.png)

## What's included?

- ESLint 10 flat config
- JavaScript recommended rules via `@eslint/js`
- TypeScript parsing via `@typescript-eslint/parser`
- Node.js globals preset
- React, React Hooks and JSX a11y presets
- Prettier running through ESLint
- Import and export sorting via `eslint-plugin-perfectionist`

## Status badges

![Version, Release and Publish](https://github.com/Alex-C-Madeira/eslint-config/actions/workflows/release.yml/badge.svg)
![NPM Version](https://img.shields.io/npm/v/%40wooden-script%2Feslint-config?style=flat-square)
![NPM License](https://img.shields.io/npm/l/%40wooden-script%2Feslint-config?style=flat-square)

## Requirements

- Node.js `>=20.19.0`
- ESLint `^10.0.0`
- TypeScript `>=5.5` for TypeScript projects

Prettier is bundled as a dependency and runs through ESLint, so consuming projects do not need to install or configure Prettier separately.

## Installation

```sh
npm install @wooden-script/eslint-config eslint --save-dev
```

```sh
yarn add @wooden-script/eslint-config eslint --dev
```

```sh
pnpm add @wooden-script/eslint-config eslint --save-dev
```

## Setup

ESLint 10 uses flat config. Create `eslint.config.mjs` in the root of your project.

For React projects:

```js
import woodenReact from '@wooden-script/eslint-config/react'

export default [...woodenReact]
```

For Node.js projects:

```js
import woodenNode from '@wooden-script/eslint-config/node'

export default [...woodenNode]
```

For generic JavaScript or TypeScript projects:

```js
import wooden from '@wooden-script/eslint-config'

export default [...wooden]
```

## Customization

Override rules by appending another config object after the Wooden Script preset.

```js
import woodenReact from '@wooden-script/eslint-config/react'

export default [
  ...woodenReact,
  {
    rules: {
      'no-console': 'off',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          arrowParens: 'always',
          endOfLine: 'auto'
        }
      ]
    }
  }
]
```

## Import and export sorting

This package uses `eslint-plugin-perfectionist` for sorting imports and exports. Override the default sorting rule like this:

```js
import wooden from '@wooden-script/eslint-config'

export default [
  ...wooden,
  {
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          newlinesBetween: 1
        }
      ]
    }
  }
]
```

## Migration from v1

Version 2 targets ESLint 10 and no longer supports `.eslintrc.*` files. Replace legacy `extends` usage with `eslint.config.mjs`.

Before:

```json
{
  "extends": ["@wooden-script/eslint-config/react"]
}
```

After:

```js
import woodenReact from '@wooden-script/eslint-config/react'

export default [...woodenReact]
```

## Related projects

- [ts-config](https://www.npmjs.com/package/@wooden-script/ts-config)

## License

This project is licensed under the MIT License. © [Alex Madeira](https://github.com/alexmadeira).
