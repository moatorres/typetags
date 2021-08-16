'use strict'

import {
  argsMap,
  getType,
  instances,
  TypedArrayRegex,
  TypedArrayTagRegex,
} from './shared'
import { getProps, toString } from '../../.internal/utils'
import { Report } from '../Report'
import {
  SYNTATIC_TYPES,
  NESTED_TYPES,
  PRIMITIVE_TYPES,
} from '../../.internal/types'

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
    return Report.instance(args, options)
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
