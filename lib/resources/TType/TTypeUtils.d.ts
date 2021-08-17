import { Tags, Types } from '../../.internal/constants'

declare type ArgsMap =
  | 'AggregateError'
  | 'AsyncFunction'
  | 'AsyncGeneratorFunction'
  | 'BigInt'
  | 'DataView'
  | 'FinalizationRegistry'
  | 'GeneratorFunction'
  | 'Intl.Locale'
  | 'Promise'
  | 'Symbol'
  | 'WeakRef'
  | 'URL'
  | 'WebAssembly.Global'
  | 'WebAssembly.Module'
  | 'WebAssembly.Instance'
  | 'WebAssembly.Memory'
  | 'WebAssembly.Table'

export declare function getType(name: Types): any
export declare const argsMap: (
  name: ArgsMap
) =>
  | AsyncGeneratorFunction
  | Uint8Array
  | WebAssembly.Module<Uint8Array>
  | SharedArrayBuffer
  | GeneratorFunction
  | Array
  | string
  | object
  | number

export declare const argsFor: (type: Types) => any
export declare const TypedArrayRegex: RegExp
export declare const TypedArrayTagRegex: RegExp
export declare const withToString: (o: any) => {
  toString: {
    self: string | undefined
    tag: Tags
    behavior: 'default' | 'custom'
  }
}
export declare const withSymbols: (o: any) => {
  symbols: {
    species: any
    iterator: Function | undefined
    toStringTag: string | undefined
    hasInstance: boolean
  }
}
export declare const withProperties: (o: any) => {
  properties: {
    ownKeys: Array<any | undefined>
    ownDescriptors?: Array<any | undefined>
    prototypeKeys?: Array<any | undefined>
    prototypeDescriptors?: Array<any | undefined>
  }
}
