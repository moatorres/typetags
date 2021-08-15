'use strict'

import { SYNTATIC_TYPES } from '../.internal/types'
import { TextUtils } from '../.internal/utils'
import { Report } from './Report'
import { Types } from './Types'

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

export class TType {
  constructor(props) {
    this.props = props
  }

  get name() {
    return TextUtils.toFirstUpper(this.type)
  }

  get type() {
    return String(this.props.type)
  }

  get tag() {
    return String(this.props.tag)
  }

  /**
   * Returns the type tag of this type's instance.
   *
   * @example
   *
   * const ArrayType = TType.create({
   *  type: 'Array',
   *  tag: '[object Array]'
   * })
   *
   * ArrayType.toString() // => '[object Array]'
   */
  toString() {
    return this.tag
  }

  hasSpecialArgs() {
    return argsMap.has(this.type)
  }

  isSyntatic() {
    return SYNTATIC_TYPES.includes(this.type)
  }

  isTypedArray() {
    const TypedArrayRegex = new RegExp(
      /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/
    )

    return TypedArrayRegex.test(this.tag)
  }

  isConstructor() {
    /**
     * `XType` is an instance of a type's constructor function.
     *
     * ie. XType = getType('Array') || XType = instances['Array']
     * would return `[Funtion: Array]`.
     */
    const XType = getType(this.type)

    try {
      /**
       * If a call to `new XType` doesn't throw,
       * it is a constructor type.
       */
      new XType(this.hasSpecialArgs() ? argsMap.get(this.type) : undefined)
      return true
    } catch (e) {
      return false
    }
  }

  isFactory() {
    /**
     * `XType` is an instance of a type's constructor function.
     *
     * ie. XType = getType('Array') || XType = instances['Array']
     * would return `[Funtion: Array]`.
     */
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

  isStringifiable() {
    /**
     * Return early as `JSON.strigify(undefined)` would *not*
     * throw any errors inside the try/catch block.
     */
    if (!this.isAvailable()) return false

    try {
      /**
       * A type is stringifiable if its instances are stringifiable.
       */
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
    /**
     * `XType` is an instance of a type's constructor function.
     *
     * ie. XType = getType('Array') || XType = instances['Array']
     * would return `[Funtion: Array]`.
     */
    const XType = getType(this.type)

    /**
     * Return early if this type is not available.
     */
    if (!this.isAvailable()) return

    /**
     * Prefer to use its constructor method.
     */
    if (this.isConstructor()) return new XType(...args)

    /**
     * If this is not a constructor, check if it's factory.
     */
    if (this.isFactory()) return XType(...args)

    /**
     * Otherwise, return the istance itself.
     */
    if (this.isObject()) return XType
    return instances[this.type]
  }

  isAvailable() {
    /**
     * For the purpose of this evaluation, the returned `NaN` instance
     * is effectively a non-value, similar to `null` and `undefined`.
     *
     * Even though our initializer checks if `NaN` is available,
     * accessing `instances['NaN']` would always return a non-value.
     */
    if (this.type === 'NaN') return typeof NaN !== 'undefined'

    /**
     * Even though `null` and `undefined` do exist syntatically
     * they are not available as instances, as they're both non-values.
     *
     * If `this.type` is defined on our initializer object,
     * then it is available.
     */
    return !!instances[this.type]
  }

  ownKeys() {
    /**
     * Return early if this type is not available.
     */
    if (!this.isAvailable()) return undefined

    /**
     * Create an object instance of the current type.
     */
    const datatype = this.instance(
      this.hasSpecialArgs() ? argsMap.get(this.type) : undefined
    )

    /**
     * Return an array of this type's property names.
     */
    return Object.getOwnPropertyNames(datatype)
  }

  get [Symbol.toStringTag]() {
    return 'TType'
  }

  get [Symbol.species]() {
    return TType
  }

  *[Symbol.iterator]() {
    yield this.props.type
    yield this.props.tag
  }

  [Symbol.hasInstance](instance) {
    return Object.prototype.toString.call(instance) === this.tag
  }

  static create(props) {
    return new TType(props)
  }
}
