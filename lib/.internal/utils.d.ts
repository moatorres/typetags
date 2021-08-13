declare type PropertyKey = string | number | symbol

export declare const toString: <T>(v: T) => string
export declare const hasOwn: <T>(obj: T, prop: PropertyKey) => boolean

export declare const comparer: <T>(
  other: Array<T>
) => <U>(current: Array<U>) => Array<T | U>

export declare const memoize: (fn: Function) => (...args: any) => any

declare interface ITextUtils {
  toTag(str: string): string
  toLower(str: string): string
  toUpper(str: string): string
  toFirstUpper(str: string): string
  toFirstLower(str: string): string
  toPredicate(str: string): string
  toRemoveDot(str: string): string
}

export declare const TextUtils: ITextUtils
export declare const getOwnKeys: (target: object) => (string | symbol)[]

export declare const isArray: Pick<ArrayConstructor, 'isArray'>
export declare const define: Pick<ObjectConstructor, 'defineProperty'>
export declare const getProps: Pick<ObjectConstructor, 'getOwnPropertyNames'>
export declare const getKeys: Pick<ObjectConstructor, 'keys'>
export declare const getEntries: Pick<ObjectConstructor, 'entries'>
export declare const getDescriptors: Pick<
  ObjectConstructor,
  'getOwnPropertyDescriptors'
>
