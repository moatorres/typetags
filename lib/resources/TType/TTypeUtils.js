'use strict'

import { initializers } from '../../initializers'
import { toString, getOwnKeys, getProps, getDescriptors } from '../../utils'

export function getType(name) {
  return initializers[name]
}

export const argsMap = new Map([
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

export const argsFor = (type) =>
  argsMap.has(type) ? argsMap.get(type) : undefined

export const TypedArrayRegex = new RegExp(
  /^(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array$/
)
export const TypedArrayTagRegex = new RegExp(
  /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/
)

export const withToString = (o) => ({
  toString: {
    self: o.toString(),
    tag: toString(o),
    behavior: o.toString() === toString(o) ? 'default' : 'custom',
  },
})

export const withSymbols = (o) => ({
  symbols: {
    species: o[Symbol.species] || o.constructor[Symbol.species],
    iterator: o[Symbol.iterator] || o.constructor[Symbol.iterator],
    toStringTag: o[Symbol.toStringTag] || o.constructor[Symbol.toStringTag],
    hasInstance: o instanceof o.constructor,
  },
})

export const withProperties = (o, opts = {}) => {
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
