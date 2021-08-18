'use strict'

import {
  argsMap,
  getType,
  instances,
  TypedArrayRegex,
  TypedArrayTagRegex,
} from './shared'
import { getProps, toString } from '../utils'

import {
  SYNTATIC_TYPES,
  NESTED_TYPES,
  PRIMITIVE_TYPES,
} from '../../.internal/constants'

export const TType = (type) => {
  const XType = getType(type)
  const args = argsMap.has(type) ? argsMap.get(type) : undefined

  const isAvailable = () => {
    if (type === 'NaN') return typeof NaN !== 'undefined'
    return !!instances[type]
  }

  const isSyntatic = () => SYNTATIC_TYPES.includes(type)

  const isConstructor = () => {
    try {
      new XType(args)
      return true
    } catch (e) {
      return false
    }
  }

  const isFactory = () => {
    try {
      XType(args)
      return true
    } catch (e) {
      return false
    }
  }

  const isObject = () => typeof instances[type] === 'object'
  const isFunction = () => typeof instances[type] === 'function'
  const isNested = () => NESTED_TYPES.some((nested) => type === nested)
  const isIterator = () => type.toLowerCase().includes('iterator')
  const isPrimitive = () => PRIMITIVE_TYPES.includes(type.toLowerCase())

  const instance = (...args) => {
    if (!isAvailable()) return
    if (isObject()) return XType
    if (isFactory() && type !== 'Date')
      return XType.of ? XType.of(...args) : XType(...args)
    if (isConstructor()) return new XType(...args)
  }

  const isStringifiable = () => {
    if (!isAvailable()) return false

    try {
      JSON.stringify(instance(args))
      return true
    } catch (e) {
      return false
    }
  }

  const hasSpecialArgs = () => argsMap.has(type)

  const getTag = () => {
    if (type === 'Null') return toString(null)
    if (type === 'Undefined') return toString(undefined)
    if (type === 'Date') return toString(new Date())
    if (argsMap.has(type) && isSyntatic()) return toString(argsMap.get(type))

    return toString(instance(args))
  }

  const typeOf = () => typeof instance(args)
  const inGlobal = () => type in global
  const isTypedArray = () =>
    TypedArrayRegex.test(type) && TypedArrayTagRegex.test(getTag())

  const ownKeys = () => {
    if (!isAvailable()) return undefined
    return getProps(instance(args))
  }

  const info = (options) => {
    if (!isAvailable()) return

    const o = instance(args)

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
        iterator: o[Symbol.iterator],
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
      name: type,
      tag: getTag(),
      // type: this.builtin(),
      typeOf: typeOf(),
      // hasSpecialArgs: this.hasSpecialArgs(),
      inGlobal: inGlobal(),
      // instance: instance(),
      instanceOf: o.constructor.name || o.name,
      instanceTypeOf: instanceTypeOf(),
      isAvailable: isAvailable(),
      isConstructor: isConstructor(),
      isFactory: isFactory(),
      isFunction: isFunction(),
      isIterator: isIterator(),
      isNested: isNested(),
      // isObject: isObject(),
      isPrimitive: isPrimitive(),
      isStringifiable: isStringifiable(),
      isSyntatic: isSyntatic(),
      isTypedArray: isTypedArray(),
      // ownKeys: this.ownKeys(),
      ...withProperties(o, options),
      // prototype: o.constructor.prototype,
      // constructor: o.constructor,
      ...withToString(o),
      ...withSymbols(o),
    }
  }

  return {
    type: type,
    tag: getTag(),
    isAvailable: isAvailable,
    isSyntatic: isSyntatic,
    isPrimitive: isPrimitive,
    isConstructor: isConstructor,
    isFactory: isFactory,
    isObject: isObject,
    isFunction: isFunction,
    isNested: isNested,
    isIterator: isIterator,
    isStringifiable: isStringifiable,
    isTypedArray: isTypedArray,
    hasSpecialArgs: hasSpecialArgs,
    typeOf: typeOf,
    inGlobal: inGlobal,
    ownKeys: ownKeys,
    toString: getTag(),
    instance: instance,
    info: info,
    create: (type) => TType(type),
    get [Symbol.toStringTag]() {
      return 'TType'
    },
    get [Symbol.species]() {
      return TType
    },
    *[Symbol.iterator]() {
      yield this.props.type
      yield this.props.tag
    },
    [Symbol.hasInstance](instance) {
      return toString(instance) === this.tag
    },
  }
}
