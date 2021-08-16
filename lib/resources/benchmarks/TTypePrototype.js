'use strict'

import {
  argsMap,
  getType,
  instances,
  argsFor,
  TypedArrayRegex,
  TypedArrayTagRegex,
} from './shared'
import { toString } from '../../.internal/utils'
import { Report } from '../Report'
import { SYNTATIC_TYPES, NESTED_TYPES } from '../../.internal/types'

export function TType(type) {
  this.type = type
  this.tag = this.getTag()
}

TType.prototype.isAvailable = function () {
  if (this.type === 'NaN') return typeof NaN !== 'undefined'
  return !!instances[this.type]
}

TType.prototype.isSyntatic = function () {
  return SYNTATIC_TYPES.includes(this.type)
}

TType.prototype.isTypedArray = function () {
  return (
    TypedArrayRegex.test(this.type) && TypedArrayTagRegex.test(this.getTag())
  )
}

TType.prototype.isConstructor = function () {
  const XType = getType(this.type)
  try {
    new XType(argsFor(this.type))
    return true
  } catch (e) {
    return false
  }
}

TType.prototype.isFactory = function () {
  const XType = getType(this.type)
  try {
    XType(argsFor(this.type))
    return true
  } catch (e) {
    return false
  }
}

TType.prototype.isObject = function () {
  return typeof instances[this.type] === 'object'
}

TType.prototype.isFunction = function () {
  return typeof instances[this.type] === 'function'
}

TType.prototype.isNested = function () {
  return NESTED_TYPES.some((nested) => this.type === nested)
}

TType.prototype.isIterator = function () {
  return this.type.toLowerCase().includes('iterator')
}

TType.prototype.isStringifiable = function () {
  if (!this.isAvailable()) return false

  try {
    JSON.stringify(this.instance(argsFor(this.type)))
    return true
  } catch (e) {
    return false
  }
}

TType.prototype.hasSpecialArgs = function () {
  return argsMap.has(this.type)
}

TType.prototype.getTag = function () {
  if (this.type === 'Null') return toString(null)
  if (this.type === 'Undefined') return toString(undefined)
  if (this.type === 'Date') return toString(new Date())
  if (argsMap.has(this.type) && this.isSyntatic())
    return toString(argsMap.get(this.type))

  return toString(this.instance(argsFor(this.type)))
}

TType.prototype.typeOf = function () {
  return typeof this.instance(argsFor(this.type))
}

TType.prototype.toString = function () {
  return this.getTag()
}

TType.prototype.inGlobal = function () {
  return this.type in global
}

TType.prototype.instance = function (...args) {
  const XType = getType(this.type)
  if (!this.isAvailable()) return
  if (this.isObject()) return XType(this.type)
  if (this.isFactory() && this.type !== 'Date')
    return XType.of ? XType.of(...args) : XType(...args)
  if (this.isConstructor()) return new XType(...args)
  return instances[this.type]
}

TType.prototype.ownKeys = function () {
  if (!this.isAvailable()) return undefined

  return Object.getOwnPropertyNames(this.instance(argsFor(this.type)))
}

TType.prototype.info = function (options) {
  if (!this.isAvailable()) return
  return Report.instance(this.instance(argsFor(this.type)), options)
}

TType.prototype[Symbol.toStringTag] = 'TType'

TType.prototype[Symbol.species] = TType

TType.prototype[Symbol.iterator] = function* () {
  yield this.type
  yield this.getTag()
}

TType.prototype[Symbol.hasInstance] = function (instance) {
  return toString(instance) === this.getTag()
}

TType.prototype.create = function (type) {
  return new TType(type)
}

TType.prototype = Object.create(TType.prototype)
