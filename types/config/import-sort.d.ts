import { Linter } from 'eslint'

export const defaultGroups: Array<string | string[]>
export const defaultOptions: {
  type: string
  order: string
  newlinesBetween: number
  groups: typeof defaultGroups
  internalPattern: string[]
}
export const defaultExportOptions: {
  type: string
  order: string
  newlinesBetween: number
}
export const defaultJsxPropsOptions: {
  type: string
  order: string
}
export const defaultRule: Linter.RulesRecord
