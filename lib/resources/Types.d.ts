declare type NestedTypes =
  | 'Array.Iterator'
  | 'Map.Iterator'
  | 'Set.Iterator'
  | 'String.Iterator'
  | 'Intl.Collator'
  | 'Intl.DateTimeFormat'
  | 'Intl.ListFormat'
  | 'Intl.Locale'
  | 'Intl.NumberFormat'
  | 'Intl.PluralRules'
  | 'Intl.RelativeTimeFormat'
  | 'WebAssembly.Module'
  | 'WebAssembly.Global'
  | 'WebAssembly.Instance'
  | 'WebAssembly.Memory'
  | 'WebAssembly.Table'
  | 'WebAssembly.CompileError'
  | 'WebAssembly.LinkError'
  | 'WebAssembly.RuntimeError'

declare type TypesNames =
  | 'AbortController'
  | 'AbortSignal'
  | 'AggregateError'
  | 'Arguments'
  | 'Array'
  | 'ArrayBuffer'
  | 'AsyncFunction'
  | 'Atomics'
  | 'BigInt'
  | 'BigInt64Array'
  | 'BigUint64Array'
  | 'Boolean'
  | 'Console'
  | 'DataView'
  | 'Date'
  | 'Error'
  | 'EvalError'
  | 'FinalizationRegistry'
  | 'Float32Array'
  | 'Float64Array'
  | 'Function'
  | 'Generator'
  | 'GeneratorFunction'
  | 'GlobalThis'
  | 'Global'
  | 'Infinity'
  | 'Int8Array'
  | 'Int16Array'
  | 'Int32Array'
  | 'Intl'
  | 'JSON'
  | 'Map'
  | 'Math'
  | 'NaN'
  | 'Null'
  | 'Number'
  | 'Object'
  | 'Process'
  | 'Promise'
  | 'RangeError'
  | 'ReferenceError'
  | 'RegExp'
  | 'Reflect'
  | 'Set'
  | 'SharedArrayBuffer'
  | 'String'
  | 'Symbol'
  | 'SyntaxError'
  | 'TextDecoder'
  | 'TextEncoder'
  | 'TypeError'
  | 'Uint8Array'
  | 'Uint8ClampedArray'
  | 'Uint16Array'
  | 'Uint32Array'
  | 'Undefined'
  | 'URIError'
  | 'URL'
  | 'URLSearchParams'
  | 'WeakMap'
  | 'WeakRef'
  | 'WeakSet'
  | 'WebAssembly'
  | 'Window'
  | 'Worker'

declare type Tags =
  | '[object AbortController]'
  | '[object AbortSignal]'
  | '[object Arguments]'
  | '[object Array]'
  | '[object Array Iterator]'
  | '[object ArrayBuffer]'
  | '[object AsyncFunction]'
  | '[object Atomics]'
  | '[object BigInt]'
  | '[object BigInt64Array]'
  | '[object BigUint64Array]'
  | '[object Boolean]'
  | '[object console]'
  | '[object DataView]'
  | '[object Date]'
  | '[object Error]'
  | '[object FinalizationRegistry]'
  | '[object Float32Array]'
  | '[object Float64Array]'
  | '[object Function]'
  | '[object Generator]'
  | '[object GeneratorFunction]'
  | '[object global]'
  | '[object Int8Array]'
  | '[object Int16Array]'
  | '[object Int32Array]'
  | '[object Intl]'
  | '[object Intl.Collator]'
  | '[object Intl.DateTimeFormat]'
  | '[object Intl.ListFormat]'
  | '[object Intl.Locale]'
  | '[object Intl.NumberFormat]'
  | '[object Intl.PluralRules]'
  | '[object Intl.RelativeTimeFormat]'
  | '[object JSON]'
  | '[object Map]'
  | '[object Map Iterator]'
  | '[object Math]'
  | '[object Null]'
  | '[object Number]'
  | '[object Object]'
  | '[object process]'
  | '[object Promise]'
  | '[object Reflect]'
  | '[object RegExp]'
  | '[object Set]'
  | '[object Set Iterator]'
  | '[object SharedArrayBuffer]'
  | '[object String]'
  | '[object String Iterator]'
  | '[object Symbol]'
  | '[object TextDecoder]'
  | '[object TextEncoder]'
  | '[object Uint8Array]'
  | '[object Uint8ClampedArray]'
  | '[object Uint16Array]'
  | '[object Uint32Array]'
  | '[object Undefined]'
  | '[object URL]'
  | '[object URLSearchParams]'
  | '[object WeakMap]'
  | '[object WeakRef]'
  | '[object WeakSet]'
  | '[object WebAssembly]'
  | '[object WebAssembly.Module]'
  | '[object WebAssembly.Global]'
  | '[object WebAssembly.Instance]'
  | '[object WebAssembly.Memory]'
  | '[object WebAssembly.Table]'
  | '[object Window]'
  | '[object Worker]'

declare interface TypeMeta {
  inGlobal: boolean
  isAvailable: boolean
  isConstructor: boolean
  isFactory: boolean
  isIterator: boolean
  isNested: boolean
  isPrimitive: boolean
  isSyntatic: boolean
  istStringifiable: boolean
  name: TypesNames | NestedTypes
  tag: Tags
  typeof:
    | 'boolean'
    | 'bigint'
    | 'function'
    | 'object'
    | 'number'
    | 'string'
    | 'symbol'
    | 'undefined'
}

declare interface TypeMetaEmpty {
  isAvailable: false
}

declare interface ITypes {
  init(): void
  initializers(): { [key in TypesNames | NestedTypes]: any }
  metadata(options?: {
    refresh: boolean
  }): { [key in TypesNames | NestedTypes]: TypeMeta | TypeMetaEmpty }
  tags(options?: { refresh: boolean }): Array<{
    type: TypesNames | NestedTypes
    tag: Tags
  }>
  get(name: TypesNames | NestedTypes): any
  list(): Array<string, any>
  available(): Array<string, any>
  unavailable(): Array<string, any>
  report(): {
    types: number
    available: number
    unavailable: number
  }
}

export declare const Types: ITypes
