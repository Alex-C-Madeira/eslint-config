import { Linter } from 'eslint'

declare const base: Linter.Config[]
declare const node: Linter.Config[]
declare const react: Linter.Config[]
declare const config: typeof import('./config')

export { base, config, node, react }
export default base
