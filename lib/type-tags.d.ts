export declare type Types =
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
  | 'Infinity'
  | 'Int8Array'
  | 'Int16Array'
  | 'Int32Array'
  // | 'InternalError' // non-standard
  | 'Intl'
  | 'Intl.Collator'
  | 'Intl.DateTimeFormat'
  | 'Intl.ListFormat'
  | 'Intl.Locale'
  | 'Intl.NumberFormat'
  | 'Intl.PluralRules'
  | 'Intl.RelativeTimeFormat'
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
  | 'Set'
  | 'Set.Iterator'
  | 'SharedArrayBuffer'
  | 'String'
  | 'Symbol'
  | 'SyntaxError'
  | 'TypeError'
  | 'Uint8Array'
  | 'Uint8ClampedArray'
  | 'Uint16Array'
  | 'Uint32Array'
  | 'Undefined'
  | 'URIError'
  | 'WeakMap'
  | 'WeakRef'
  | 'WeakSet'
  | 'WebAssembly'
  | 'WebAssembly.Module'
  | 'WebAssembly.Global'
  | 'WebAssembly.Instance'
  | 'WebAssembly.Memory'
  | 'WebAssembly.Table'
  | 'WebAssembly.CompileError'
  | 'WebAssembly.LinkError'
  | 'WebAssembly.RuntimeError'
  | 'Window'
  | 'Worker'

export declare type Tags =
  | '[object Arguments]'
  | '[object Array]'
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
  | '[object Math]'
  | '[object Null]'
  | '[object Number]'
  | '[object Object]'
  | '[object process]'
  | '[object Promise]'
  | '[object RegExp]'
  | '[object Set]'
  | '[object Set Iterator]'
  | '[object SharedArrayBuffer]'
  | '[object String]'
  | '[object Symbol]'
  | '[object Uint8Array]'
  | '[object Uint8ClampedArray]'
  | '[object Uint16Array]'
  | '[object Uint32Array]'
  | '[object Undefined]'
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

declare enum BigIntEnum {
  BigInt = '[object BigInt]',
  BigInt64Array = '[object BigInt64Array]',
  BigUint64Array = '[object BigUint64Array]',
}

declare enum BufferEnum {
  ArrayBuffer = '[object ArrayBuffer]',
  SharedArrayBuffer = '[object SharedArrayBuffer]',
}

declare enum FloatEnum {
  Float32Array = '[object Float32Array]',
  Float64Array = '[object Float64Array]',
}

declare enum GlobalThisEnum {
  Node = '[object Object]',
  Browser = '[object Window]',
  Worker = '[object Worker]',
}

declare enum IntEnum {
  Int8Array = '[object Int8Array]',
  Int16Array = '[object Int16Array]',
  Int32Array = '[object Int32Array]',
}

export declare enum IntlEnum {
  Intl = '[object Intl]',
  'Intl.Collator' = '[object Intl.Collator]',
  'Intl.DateTimeFormat' = '[object Intl.DateTimeFormat]',
  'Intl.ListFormat' = '[object Intl.ListFormat]',
  'Intl.Locale' = '[object Intl.Locale]',
  'Intl.NumberFormat' = '[object Intl.NumberFormat]',
  'Intl.PluralRules' = '[object Intl.PluralRules]',
  'Intl.RelativeTimeFormat' = '[object Intl.RelativeTimeFormat]',
}

declare enum ErrorEnum {
  Error = '[object Error]',
  AggregateError = '[object Error]',
  EvalError = '[object Error]',
  InternalError = '[object Error]',
  RangeError = '[object Error]',
  ReferenceError = '[object Error]',
  SyntaxError = '[object Error]',
  TypeError = '[object Error]',
  URIError = '[object Error]',
}

declare enum TypesEnum {
  Arguments = '[object Arguments]',
  Array = '[object Array]',
  AsyncFunction = '[object AsyncFunction]',
  Atomics = '[object Atomics]',
  Boolean = '[object Boolean]',
  Console = '[object console]',
  DataView = '[object DataView]',
  Date = '[object Date]',
  FinalizationRegistry = '[object FinalizationRegistry]',
  Function = '[object Function]',
  Infinity = '[object Number]',
  Generator = '[object Generator]',
  GeneratorFunction = '[object GeneratorFunction]',
  JSON = '[object JSON]',
  Map = '[object Map]',
  Math = '[object Math]',
  NaN = '[object Number]',
  Null = '[object Null]',
  Number = '[object Number]',
  Object = '[object Object]',
  Process = '[object process]',
  Promise = '[object Promise]',
  RegExp = '[object RegExp]',
  Set = '[object Set]',
  String = '[object String]',
  Symbol = '[object Symbol]',
  Undefined = '[object Undefined]',
  WeakMap = '[object WeakMap]',
  WeakRef = '[object WeakRef]',
  WeakSet = '[object WeakSet]',
  Window = '[object Window]',
  Worker = '[object Worker]',
}

declare enum UintEnum {
  Uint8Array = '[object Uint8Array]',
  Uint8ClampedArray = '[object Uint8ClampedArray]',
  Uint16Array = '[object Uint16Array]',
  Uint32Array = '[object Uint32Array]',
}

export declare enum WasmEnum {
  WebAssembly = '[object WebAssembly]',
  'WebAssembly.CompileError' = '[object Error]',
  'WebAssembly.DateTimeFormat' = '[object Intl.DateTimeFormat]',
  'WebAssembly.LinkError' = '[object Error]',
  'WebAssembly.ListFormat' = '[object Intl.ListFormat]',
  'WebAssembly.Locale' = '[object Intl.Locale]',
  'WebAssembly.Module' = '[object WebAssembly.Module]',
  'WebAssembly.NumberFormat' = '[object Intl.NumberFormat]',
  'WebAssembly.PluralRules' = '[object Intl.PluralRules]',
  'WebAssembly.RelativeTimeFormat' = '[object Intl.RelativeTimeFormat]',
  'WebAssembly.RuntimeError' = '[object Error]',
  'WebAssembly.Table' = '[object WebAssembly.Table]',
}

declare type TypeTagsEnum =
  | BigIntEnum
  | BufferEnum
  | ErrorEnum
  | FloatEnum
  | GlobalThisEnum
  | IntEnum
  | IntlEnum
  | TypesEnum
  | UintEnum
  | WasmEnum

export declare type ITypeTags = {
  [key in Types]: Tags
}

export declare const TypeTags: ITypeTags
// export declare const TypeTags: Record<Types, Tags>
