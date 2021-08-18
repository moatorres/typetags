'use strict'

import { toString, getProps } from '../../utils'
import { getType, argsFor, argsMap } from './TTypeUtils'
import { withProperties, withSymbols, withToString } from './TTypeUtils'
import { TypedArrayRegex, TypedArrayTagRegex } from './TTypeUtils'
import { SYNTATIC_TYPES, NESTED_TYPES, PRIMITIVE_TYPES } from '../../constants'

export class TType {
  constructor(type) {
    this.type = type
    this.tag = this.getTag()
  }

  isAvailable() {
    if (this.type === 'NaN') return typeof NaN !== 'undefined'
    return !!getType(this.type)
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
    return typeof getType(this.type) === 'object'
  }

  isFunction() {
    return typeof getType(this.type) === 'function'
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
    return getType(this.type)
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
