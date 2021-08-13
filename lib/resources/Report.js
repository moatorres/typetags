'use strict'

import {
  toString,
  getOwnKeys,
  getProps,
  getDescriptors,
} from '../.internal/utils'
import {
  NESTED_TYPES,
  NUMBER_TYPES,
  PRIMITIVE_TYPES,
  SYNTATIC_TAGS,
} from '../.internal/types'

const withProperties = (o, opts = {}) => {
  const { descriptors, prototype, instance } = opts

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
  let result = SYNTATIC_TAGS.filter((t) => t === tag)
  let found = result.length > 0
  return found ? result[0].slice(8, -1) : undefined
}

const handleSpecial = (type) => {
  // global, Reflect and Intl do not have a 'name' prop so we check structuraly
  // builtin reports consider global === globalThis
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

  if (typeof o === 'function') {
    // instead of being named "<type>.<@nested>", nested types are named as "<@nested>" only
    // e.g "WebAssembly.Module".name equals "Module"
    let found = NESTED_TYPES.filter(
      (name) =>
        name.includes(o.name) &&
        o.name !== 'Date' && // otherwise it is Intl.DateTimeFormat
        o.name !== 'Error' && // otherwise it is an Wasm Error
        o.name !== 'Number' // otherwise it is Intl.NumberFormat
    )

    // check if the type is a "syntax" word
    let result = isSyntatic(o)
      ? isSyntatic(o)
      : found.length > 0
      ? found[0]
      : o.name

    return { name: result }
  }

  // account for NaN and Infinity
  if (typeof o === 'number') {
    let name = NUMBER_TYPES.filter((name) => name.includes(o))[0]
    return { name: name }
  }
}

export class Report {
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
      properties: (o && getProps(o)) || [],
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
          ? getProps(datatype)
          : reflectKeys(datatype),
      },
    }
  }

  static get [Symbol.species]() {
    return Report
  }

  static get [Symbol.toStringTag]() {
    return 'TypeTags'
  }
}
