'use strict'

import {
  toString,
  getOwnKeys,
  getProps,
  getDescriptors,
} from '../.internal/utils'
import {
  SYNTATIC_TYPES,
  NESTED_TYPES,
  PRIMITIVE_TYPES,
} from '../.internal/types'

const instances = require('../.internal/init')

// TODO: Extract helper functions
function getType(name) {
  return instances[name]
}

const argsMap = new Map([
  ['AggregateError', []],
  ['AsyncFunction', async function () {}],
  ['AsyncGeneratorFunction', async function* () {}],
  ['BigInt', 1],
  ['DataView', new SharedArrayBuffer(12)],
  ['FinalizationRegistry', () => {}],
  ['GeneratorFunction', function* () {}],
  ['Intl.Locale', 'en'],
  ['Promise', (resolve) => resolve],
  ['Symbol', 'typetags'],
  ['WeakRef', {}],
  ['URL', 'https://npmjs.com/typetags'],
  ['WebAssembly.Global', ...[{ value: 'i32', mutable: true }, 0]],
  [
    'WebAssembly.Module',
    new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00]),
  ],
  [
    'WebAssembly.Instance',
    new WebAssembly.Module(
      new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])
    ),
  ],
  ['WebAssembly.Memory', { initial: 1, max: 10 }],
  ['WebAssembly.Table', { initial: 1, element: 'anyfunc' }],
])

const argsFor = (type) => (argsMap.has(type) ? argsMap.get(type) : undefined)

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

  isPrimitive() {
    return PRIMITIVE_TYPES.includes(this.type.toLowerCase())
  }

  isConstructor() {
    const XType = getType(this.type)

    try {
      new XType(argsFor(this.type))
      return true
    } catch (e) {
      return false
    }
  }

  isFactory() {
    const XType = getType(this.type)

    try {
      XType(argsFor(this.type))
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
      JSON.stringify(this.instance(argsFor(this.type)))
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
    if (this.type === 'Date') return toString(new Date())
    if (argsMap.has(this.type) && this.isSyntatic())
      return toString(argsMap.get(this.type))

    return toString(this.instance(argsFor(this.type)))
  }

  instanceTypeOf() {
    if (this.type === 'Null') return typeof null
    if (this.type === 'Undefined') return typeof undefined
    return typeof this.instance(argsFor(this.type))
  }

  typeOf() {
    if (this.type === 'Null') return typeof null
    if (this.type === 'Undefined') return typeof undefined
    return typeof getType(this.type)
  }

  // toString() {
  //   return this.getTag()
  // }

  inGlobal() {
    return this.type in global
  }

  instance(...args) {
    const XType = getType(this.type)
    if (!this.isAvailable()) return
    if (this.isObject()) return XType
    if (this.isFactory() && this.type !== 'Date')
      return XType.of ? XType.of(...args) : XType(...args)
    if (this.isConstructor()) return new XType(...args)
    return instances[this.type]
  }

  builtin() {
    if (!this.isAvailable()) return
    return getType(this.type)
  }

  ownKeys() {
    if (!this.isAvailable()) return
    return getProps(this.builtin())
    // return getProps(this.instance(argsFor(this.type)))
  }

  info(options) {
    if (!this.isAvailable()) return

    const o = this.instance(argsFor(this.type))

    // TODO: Extract helper functions
    const withToString = (o) => ({
      toString: {
        self: o.toString(),
        tag: toString(o),
        behavior: o.toString() === toString(o) ? 'default' : 'custom',
      },
    })

    const withSymbols = (o) => ({
      symbols: {
        species: o[Symbol.species] || o.constructor[Symbol.species],
        iterator: o[Symbol.iterator] || o.constructor[Symbol.iterator],
        toStringTag: o[Symbol.toStringTag] || o.constructor[Symbol.toStringTag],
        hasInstance: o instanceof o.constructor,
      },
    })

    const withProperties = (o, opts = {}) => {
      const { descriptors, prototype } = opts

      const ownKeys = { ownKeys: getProps(o) }
      const ownDescriptors = { ownDescriptors: getDescriptors(o) }
      const prototypeKeys = { prototypeKeys: getOwnKeys(o.__proto__) }
      const prototypeDescriptors = {
        prototypeDescriptors: getDescriptors(o.__proto__),
      }

      return {
        properties: {
          ...ownKeys,
          ...(descriptors && ownDescriptors),
          ...(prototype && prototypeKeys),
          ...(prototype && descriptors && prototypeDescriptors),
        },
      }
    }

    return {
      name: this.type,
      tag: this.tag,
      type: this.builtin(), // might be removed and replaced by instanceOf?
      typeOf: this.typeOf(),
      hasSpecialArgs: this.hasSpecialArgs(),
      inGlobal: this.inGlobal(),
      instanceOf: o.constructor.name || o.name,
      instanceTypeOf: this.instanceTypeOf(),
      isAvailable: this.isAvailable(),
      isConstructor: this.isConstructor(),
      isFactory: this.isFactory(),
      isFunction: this.isFunction(),
      isIterator: this.isIterator(),
      isNested: this.isNested(),
      isObject: this.isObject(),
      isPrimitive: this.isPrimitive(),
      isStringifiable: this.isStringifiable(),
      isSyntatic: this.isSyntatic(),
      isTypedArray: this.isTypedArray(),
      ...withProperties(o, options),
      ...withToString(o),
      ...withSymbols(o),
    }
  }

  get [Symbol.toStringTag]() {
    return 'TypeTags ' + this.type
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
