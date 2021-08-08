export declare const toString: (v: T) => string | undefined
export declare const hasOwn: (obj: object, prop: string) => boolean

// TODO: double-check this one
export declare const comparer: (
  other: Array<T>
) => (current: Array<U>) => Array<T | U>

export declare const memoize: (fn: Function) => any
export declare const define: <T>(
  object: object,
  name: string,
  value: U
) => U & T

declare type TextUtil = (str: string) => string
declare type TextMethods =
  | 'toTag'
  | 'toLower'
  | 'toUpper'
  | 'toFirstUpper'
  | 'toFirstLower'
  | 'toPredicate'
  | 'toRemoveDot'

declare interface ITextUtils {
  [key in TextMethods]: TextUtil
}

export declare const TextUtils: ITextUtils
export declare const getGlobalTypes: () => Array<[string, Function]>
