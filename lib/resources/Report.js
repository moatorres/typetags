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
  SYNTATIC_TYPES,
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
  let result = SYNTATIC_TYPES.filter((t) => t === type)
  let found = result.length > 0
  return found ? true : false
}

const handleSpecial = (type) => {
  /**
   * `Reflect`, `Intl` and `global` do not have a `name` prop so we check structuraly.
   */
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
    /**
     * Instead of being named "<type>.<@nested>", nested types are named as "<@nested>" only.
     *
     * e.g "WebAssembly.Module".name equals "Module"
     */
    let found = NESTED_TYPES.filter(
      (name) =>
        name.includes(o.name) &&
        o.name !== 'Date' && // otherwise it is Intl.DateTimeFormat
        o.name !== 'Error' && // otherwise it is an Wasm Error
        o.name !== 'Number' // otherwise it is Intl.NumberFormat
    )

    /**
     * Check if the type is part of a syntax-reserved words.
     */
    let result = isSyntatic(o)
      ? isSyntatic(o)
      : found.length > 0
      ? found[0]
      : o.name

    return { name: result }
  }

  /**
   * Account for NaN and Infinity types.
   */
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

  /**
   * Not to be used with types' constructors.
   */
  static instance(o, opts = {}) {
    return {
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
