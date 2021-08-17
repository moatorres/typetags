'use strict'

import {
  toString,
  getProps,
  isArray,
  TextUtils,
  memoize,
} from '../.internal/utils'
import { TType } from './TType'
import { Types } from './Types'

const TAGS = Types.tags()

class TypeTags {
  constructor() {
    if (TypeTags.instance) return TypeTags.instance
    TypeTags.instance = Object.freeze(this)
  }

  static create() {
    return new TypeTags()
  }

  get(name) {
    if (typeof name !== 'string') return
    const maybeFound = TAGS.filter(
      (meta) => TextUtils.toLower(meta.type) === TextUtils.toLower(name)
    )
    return maybeFound.length > 0 ? maybeFound[0].tag : undefined
  }

  of(v) {
    if (typeof v === 'undefined') return
    const args = isArray(v) ? [...v] : v
    const hasMany = args.length > 0
    const isString = typeof args === 'string'
    const types = TAGS.map((meta) => TextUtils.toLower(meta.type))

    const found = TAGS.filter((meta) =>
      TextUtils.toLower(meta.type) === TextUtils.toLower(args)
        ? meta.tag
        : undefined
    )

    const exists =
      isString && types.includes(TextUtils.toLower(args)) && found.length > 0

    const result = exists ? found[0].tag : undefined

    return isString && result
      ? result
      : hasMany && isArray(args)
      ? args.map(toString)
      : toString(args)
  }

  enhance(name) {
    return TType.create(name)
  }

  hasToStringMethod(o) {
    return !!o.toString && typeof o.toString === 'function'
  }

  isDefaultTag(tag) {
    return TAGS.map((meta) => meta.tag).includes(tag)
  }

  isIterator(o) {
    const IteratorRegex = new RegExp(
      /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped|Array|String|Map|WeakMap|Set|WeakSet) Iterator\]$/
    )

    return (
      IteratorRegex.test(toString(o)) ||
      (!!o.toString && IteratorRegex.test(o.toString()))
    )
  }

  isTypedArray(o) {
    const TypedArrayRegex = new RegExp(
      /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)Array\]$/
    )

    return (
      TypedArrayRegex.test(toString(o)) ||
      (!!o.toString && TypedArrayRegex.test(o.toString()))
    )
  }

  get [Symbol.species]() {
    return TypeTags
  }

  get [Symbol.toStringTag]() {
    return 'TypeTags'
  }

  static [Symbol.hasInstance](instance) {
    return toString(instance) === '[object TypeTags]'
  }

  *[Symbol.iterator]() {
    yield* getProps(TypeTags.prototype).filter(
      (method) => method !== 'constructor'
    )
  }

  static *[Symbol.iterator]() {
    yield* getProps(TypeTags.prototype).filter(
      (method) => method !== 'constructor'
    )
  }
}

TAGS.map((meta) => {
  const predicate = TextUtils.toPredicate(meta.type)
  TypeTags.prototype[meta.type] = meta.tag
  TypeTags.prototype[predicate] = function (value) {
    return value === meta.tag || toString(value) === meta.tag || value?.name === meta.type // prettier-ignore
  }
})

module.exports = { TypeTags: TypeTags.create() }
