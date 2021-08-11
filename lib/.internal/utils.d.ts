export declare const toString: <T>(v: T) => string | undefined
export declare const hasOwn: (obj: object, prop: string) => boolean

export declare const comparer: <T>(
  other: Array<T>
) => <U>(current: Array<U>) => Array<T | U>

export declare const memoize: (fn: Function) => any
export declare const define: <T, U>(
  object: object,
  name: string,
  value: U
) => U & T

declare type TextUtil = (str: string) => String
declare type TextMethods =
  | 'toTag'
  | 'toLower'
  | 'toUpper'
  | 'toFirstUpper'
  | 'toFirstLower'
  | 'toPredicate'
  | 'toRemoveDot'

declare type ITextUtils = {
  [key in TextMethods]: TextUtil
}

export declare const TextUtils: ITextUtils
export declare const getGlobalTypes: () => Array<[string, Function]>
export declare const checkRuntime: () => string
