'use strict'

import { toString } from '../.internal/utils'
import { Report } from './Report'
import { Types } from './Types'
// import {
//   argsMap,
//   getType,
//   instances,
//   TypedArrayRegex,
//   TypedArrayTagRegex,
// } from './benchmarks/shared'
import { SYNTATIC_TYPES } from '../.internal/types'

const instances = Types.initializers()

function getType(name) {
  return instances[name]
}

const argsMap = new Map([
  ['AggregateError', []],
  ['BigInt', 1],
  ['DataView', new SharedArrayBuffer(12)],
  ['FinalizationRegistry', () => {}],
  ['Intl.Locale', 'en'],
  ['Promise', (resolve) => resolve],
  ['Symbol', 'typetags'],
  ['WeakRef', {}],
  ['URL', 'https://npmjs.com/typetags'],
  [
    'WebAssembly.Module',
    new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00]),
  ],
  [
    'WebAssembly.Instance',
    new WebAssembly.Module(
      new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])
    ),
  ], // double-check
  ['WebAssembly.Memory', { initial: 1, max: 10 }],
  ['WebAssembly.Table', { initial: 1, element: 'anyfunc' }],
])

const TypedArrayRegex = new RegExp(
  /^(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array$/
)
const TypedArrayTagRegex = new RegExp(
  /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/
)

export class TType {
  constructor(type) {
    this.type = type
    this.tag = this.getTag()
  }

  isAvailable() {
    if (this.type === 'NaN') return typeof NaN !== 'undefined'
    return !!instances[this.type]
  }

  isSyntatic() {
    return SYNTATIC_TYPES.includes(this.type)
  }

  isTypedArray() {
    return (
      TypedArrayRegex.test(this.type) && TypedArrayTagRegex.test(this.getTag())
    )
  }

  isConstructor() {
    const XType = getType(this.type)

    try {
      new XType(this.hasSpecialArgs() ? argsMap.get(this.type) : undefined)
      return true
    } catch (e) {
      return false
    }
  }

  isFactory() {
    const XType = getType(this.type)

    try {
      XType(this.hasSpecialArgs() ? argsMap.get(this.type) : undefined)
      return true
    } catch (e) {
      return false
    }
  }

  isObject() {
    return typeof instances[this.type] === 'object'
  }

  isFunction() {
    return typeof instances[this.type] === 'function'
  }

  isNested() {
    return NESTED_TYPES.some((nested) => this.type === nested)
  }

  isIterator() {
    return this.type.toLowerCase().includes('iterator')
  }

  isStringifiable() {
    if (!this.isAvailable()) return false

    try {
      JSON.stringify(
        this.instance(
          this.hasSpecialArgs() ? argsMap.get(this.type) : undefined
        )
      )
      return true
    } catch (e) {
      return false
    }
  }

  hasSpecialArgs() {
    return argsMap.has(this.type)
  }

  getTag() {
    if (this.type === 'Null') return toString(null)
    if (this.type === 'Undefined') return toString(undefined)
    if (this.type === 'NaN') return toString(NaN)
    if (this.type === 'Infinity') return toString(Infinity)
    if (this.type === 'AsyncFunction') return toString(argsMap.get(this.type))

    return toString(
      this.instance(this.hasSpecialArgs() ? argsMap.get(this.type) : undefined)
    )
  }

  typeOf() {
    if (this.type === 'Null') return typeof null
    if (this.type === 'Undefined') return typeof undefined
    return typeof this.instance(
      this.hasSpecialArgs() ? argsMap.get(this.type) : undefined
    )
  }

  toString() {
    return this.getTag()
  }

  inGlobal() {
    return this.type in global
  }

  info(options) {
    if (!this.isAvailable()) return
    return Report.instance(
      this.hasSpecialArgs()
        ? this.instance(argsMap.get(this.type))
        : this.instance(),
      options
    )
  }

  instance(...args) {
    const XType = getType(this.type)
    if (!this.isAvailable()) return
    if (this.isObject()) return XType
    if (this.isFactory()) return XType.of ? XType.of(...args) : XType(...args)
    if (this.isConstructor()) return new XType(...args)
    return instances[this.type]
  }

  builtin() {
    if (!this.isAvailable()) return
    return getType(this.type)
  }

  ownKeys() {
    if (!this.isAvailable()) return undefined

    const datatype = this.instance(
      this.hasSpecialArgs() ? argsMap.get(this.type) : undefined
    )

    return Object.getOwnPropertyNames(datatype)
  }

  get [Symbol.toStringTag]() {
    return 'TType'
  }

  get [Symbol.species]() {
    return TType
  }

  *[Symbol.iterator]() {
    yield this.type
    yield this.getTag()
  }

  [Symbol.hasInstance](instance) {
    return toString(instance) === this.getTag()
  }

  static create(props) {
    return new TType(props)
  }
}
