import { NestedTypes, Tags, Types } from './constants'

declare type PropertyKey = string | number | symbol

export declare const comparer: <T>(
  other: Array<T>
) => <U>(current: Array<U>) => Array<T | U>

export declare const defineToString: <T>(o: T) => T
export declare const addTag: <T>(o: T, tag: string) => T

export declare const getOwnKeys: (target: object) => (string | symbol)[]
export declare const toString: <T>(v: T) => string
export declare const hasToString: <T>(v: T) => boolean
export declare const hasOwn: <T>(obj: T, prop: PropertyKey) => boolean
export declare const isArray: Pick<ArrayConstructor, 'isArray'>
export declare const define: Pick<ObjectConstructor, 'defineProperty'>
export declare const getProps: Pick<ObjectConstructor, 'getOwnPropertyNames'>
export declare const getKeys: Pick<ObjectConstructor, 'keys'>
export declare const getEntries: Pick<ObjectConstructor, 'entries'>
export declare const getDescriptors: Pick<
  ObjectConstructor,
  'getOwnPropertyDescriptors'
>

declare interface TypeTagsMetadata {
  type: Types | NestedTypes
  tag: Tags
}

export const generateTypeTags: () => Array<TypeTagsMetadata>
