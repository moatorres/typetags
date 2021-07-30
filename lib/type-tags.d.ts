export declare type Types =
  | 'Array'
  | 'ArrayBuffer'
  | 'BigInt64Array'
  | 'BigUint64Array'
  | 'Boolean'
  | 'Date'
  | 'Error'
  | 'Float32Array'
  | 'Float64Array'
  | 'Function'
  | 'Int8Array'
  | 'Int16Array'
  | 'Int32Array'
  | 'Map'
  | 'Math'
  | 'Null'
  | 'Number'
  | 'Object'
  | 'RegExp'
  | 'Set'
  | 'String'
  | 'Symbol'
  | 'Uint8Array'
  | 'Uint8ClampedArray'
  | 'Uint16Array'
  | 'Uint32Array'
  | 'Undefined'
  | 'WeakMap'
  | 'WeakRef'
  | 'WeakSet'

export declare type Tags =
  | '[object Array]'
  | '[object ArrayBuffer]'
  | '[object BigInt64Array]'
  | '[object BigUint64Array]'
  | '[object Boolean]'
  | '[object Date]'
  | '[object Error]'
  | '[object Float32Array]'
  | '[object Float64Array]'
  | '[object Function]'
  | '[object Int8Array]'
  | '[object Int16Array]'
  | '[object Int32Array]'
  | '[object Map]'
  | '[object Math]'
  | '[object Null]'
  | '[object Number]'
  | '[object Object]'
  | '[object RegExp]'
  | '[object Set]'
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

declare enum TypeTagsEnum {
  Array = '[object Array]',
  ArrayBuffer = '[object ArrayBuffer]',
  BigInt64Array = '[object BigInt64Array]',
  BigUint64Array = '[object BigUint64Array]',
  Boolean = '[object Boolean]',
  Date = '[object Date]',
  Error = '[object Error]',
  Float32Array = '[object Float32Array]',
  Float64Array = '[object Float64Array]',
  Function = '[object Function]',
  Int8Array = '[object Int8Array]',
  Int16Array = '[object Int16Array]',
  Int32Array = '[object Int32Array]',
  Map = '[object Map]',
  Math = '[object Math]',
  Null = '[object Null]',
  Number = '[object Number]',
  Object = '[object Object]',
  RegExp = '[object RegExp]',
  Set = '[object Set]',
  String = '[object String]',
  Symbol = '[object Symbol]',
  Uint8Array = '[object Uint8Array]',
  Uint8ClampedArray = '[object Uint8ClampedArray]',
  Uint16Array = '[object Uint16Array]',
  Uint32Array = '[object Uint32Array]',
  Undefined = '[object Undefined]',
  WeakMap = '[object WeakMap]',
  WeakRef = '[object WeakRef]',
  WeakSet = '[object WeakSet]',
}

export declare type ITypeTags = {
  [key in Types]: Tags
}

export declare interface TypeTagsInterface {
  Array: '[object Array]'
  ArrayBuffer: '[object ArrayBuffer]'
  BigInt64Array: '[object BigInt64Array]'
  BigUint64Array: '[object BigUint64Array]'
  Boolean: '[object Boolean]'
  Date: '[object Date]'
  Error: '[object Error]'
  Float32Array: '[object Float32Array]'
  Float64Array: '[object Float64Array]'
  Function: '[object Function]'
  Int8Array: '[object Int8Array]'
  Int16Array: '[object Int16Array]'
  Int32Array: '[object Int32Array]'
  Map: '[object Map]'
  Math: '[object Math]'
  Null: '[object Null]'
  Number: '[object Number]'
  Object: '[object Object]'
  RegExp: '[object RegExp]'
  Set: '[object Set]'
  String: '[object String]'
  Symbol: '[object Symbol]'
  Uint8Array: '[object Uint8Array]'
  Uint8ClampedArray: '[object Uint8ClampedArray]'
  Uint16Array: '[object Uint16Array]'
  Uint32Array: '[object Uint32Array]'
  Undefined: '[object Undefined]'
  WeakMap: '[object WeakMap]'
  WeakRef: '[object WeakRef]'
  WeakSet: '[object WeakSet]'
}

export declare const TypeTags: TypeTagsInterface
