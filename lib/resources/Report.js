'use strict'

import { toString } from '../.internal/utils'
import { NESTED_TYPES, NUMBER_TYPES, PRIMITIVE_TYPES } from '../.internal/types'

const getKeys = Reflect.ownKeys
const getPropNames = Object.getOwnPropertyNames
const getDescriptors = Object.getOwnPropertyDescriptors

const withProperties = (o, opts = {}) => {
  const { descriptors, prototype, instance } = opts

  const ownKeys = { ownKeys: getPropNames(o) }
  const ownDescriptors = { ownDescriptors: getDescriptors(o) }
  const prototypeKeys = { prototypeKeys: getKeys(o.__proto__) }
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

const withToString = (o) => ({
  typetag: toString(o),
  toString: {
    self: o.toString(),
    tag: toString(o),
    behavior: o.toString() === toString(o) ? 'default' : 'custom',
  },
})

const withSymbols = (o) => ({
  symbols: {
    species: o[Symbol.species],
    iterator: o[Symbol.iterator],
    toStringTag: o[Symbol.toStringTag],
    hasInstance: o instanceof o.constructor,
  },
})

const isPrimitive = (v) => PRIMITIVE_TYPES.includes(typeof v)

const isSyntatic = (type) => {
  let tag = toString(type)
  let syntaticTags = [
    '[object AsyncFunction]',
    '[object AsyncGenerator]',
    '[object AsyncGeneratorFunction]',
    '[object Arguments]',
    '[object Generator]',
    '[object GeneratorFunction]',
    '[object Null]',
    '[object Undefined]',
  ]
  let found = syntaticTags.filter((t) => t === tag).length > 0
  let result = syntaticTags.filter((t) => t === tag)
  return found ? result[0].slice(8, -1) : undefined
}

// TODO: improve this hack
const handleSpecial = (type) => {
  // global, Intl and Reflect do not have a 'name' prop
  // for builtin reports we consider global === globalThis
  return type.global ? 'Global' : type.isExtensible ? 'Reflect' : 'Intl'
}

const withName = (o) => {
  if (o === null) return { name: 'Null' }
  if (o === undefined) return { name: 'Undefined' }

  if (typeof o === 'object') {
    return {
      name: isSyntatic(o) || o[Symbol.toStringTag] || handleSpecial(o),
    }
  }

  // TODO: improve this hack
  if (typeof o === 'function') {
    // we name nested types as "<type>.<nested-name>"
    // their original names are "<nested-name>" only
    // e.g "Module" instead of "WebAssembly.Module"
    let found = NESTED_TYPES.filter(
      (name) =>
        name.includes(o.name) &&
        o.name !== 'Date' && // otherwise it is Intl.DateTimeFormat
        o.name !== 'Error' && // otherwise it is an Wasm Error
        o.name !== 'Number' // otherwise it is Intl.NumberFormat
    )

    // check if is "syntax" type first
    let result = isSyntatic(o)
      ? isSyntatic(o)
      : found.length > 0
      ? found[0]
      : o.name

    // let result = found.length > 0 && !o.name ? found[0] : o.name
    return { name: result }
  }

  // account for NaN and Infinity
  if (typeof o === 'number') {
    let name = NUMBER_TYPES.filter((name) => name.includes(o))[0]
    return { name: name }
  }
}

class Report {
  constructor() {
    if (Report.__instance) return Report.__instance
    Report.__instance = this
  }

  // not to be used with constructor functions or builtin types
  static instance(o, opts = {}) {
    return {
      name: o.constructor.name || o.name,
      value: o,
      typeof: typeof o,
      prototype: o.constructor.prototype,
      instanceof: o.constructor.name || o.name,
      constructor: o.constructor,
      ...withToString(o),
      ...withSymbols(o),
      ...withProperties(o, opts),
    }
  }

  // to be used with builtin types
  static builtin(o, opts = {}) {
    const withDes = (o, opts) =>
      opts.descriptors && {
        ...getDescriptors(o),
      }

    return {
      ...withName(o),
      typeof: typeof o,
      instance: o,
      properties: (o && getPropNames(o)) || [],
      ...withDes(o, opts),
    }
  }

  // not to be used with constructor functions or builtin types
  // prefer to use with self typetag inspections
  static introspect(datatype) {
    return {
      typeof: typeof datatype,
      tag: toString(datatype),
      toString: datatype.toString(),
      toStringTag: datatype[Symbol.toStringTag],
      toStringBehavior:
        datatype.toString() === toString(datatype) ? 'default' : 'custom',
      constructor: datatype.constructor,
      properties: {
        ownKeys: isPrimitive(datatype)
          ? getPropNames(datatype)
          : reflectKeys(datatype),
      },
    }
  }

  get [Symbol.species]() {
    return TypeTags
  }

  get [Symbol.toStringTag]() {
    return 'TypeTags'
  }
}

module.exports = { Report }
