import {
  NestedTypes,
  PrimitiveTypes,
  Tags,
  Types,
} from '../resources/constants'

declare interface ReportOptions {
  descriptors?: boolean
  prototype?: boolean
}

declare type TTypeInterfaceClass<T> = {
  create(type: Types | NestedTypes): TTypeInterface<T>
}

export declare interface TTypeInterface<T> {
  type: Types | NestedTypes
  tag: Tags
  isAvailable(): boolean
  isSyntatic(): boolean
  isTypedArray(): boolean
  isPrimitive(): boolean
  isConstructor(): boolean
  isFactory(): boolean
  isObject(): boolean
  isFunction(): boolean
  isNested(): boolean
  isIterator(): boolean
  isStringifiable(): boolean
  hasSpecialArgs(): boolean
  getTag(): Tags
  instanceTypeOf(): PrimitiveTypes | 'object'
  typeOf(): PrimitiveTypes | 'object'
  toString(): Tags
  inGlobal(): boolean
  info(options?: ReportOptions): TTypeInfo<T> | never
  instance(...args: any): T | string | object
  builtin<T>(): T
  ownKeys<T>(): Array<keyof T>
}

declare interface TTypeInfo<T> {
  name: Types
  tag: Tags
  type: T
  typeOf: PrimitiveTypes | 'object'
  hasSpecialArgs: boolean
  inGlobal: boolean
  instanceOf: Types | undefined
  instanceTypeOf: PrimitiveTypes | 'object'
  isAvailable: boolean
  isConstructor: boolean
  isFactory: boolean
  isFunction: boolean
  isIterator: boolean
  isNested: boolean
  isPrimitive: boolean
  isStringifiable: boolean
  isSyntatic: boolean
  isTypedArray: boolean
  properties: Array<string | symbol | number | undefined>
  toString: {
    self: string
    tag: Tags
    behavior: 'custom' | 'default'
  }
  symbols: {
    species: any
    iterator: Function | undefined
    toStringTag: string | undefined
    hasInstance: boolean
  }
}

export declare const TType: TTypeInterfaceClass<any>
