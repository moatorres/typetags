'use strict'

import { TType } from './TType'
import { TextUtils } from './TextUtils'
import {
  toString,
  getProps,
  isArray,
  define,
  generateTypeTags,
  hasToString,
} from '../utils'

const TAGS = generateTypeTags()

const makeTypeTags = () => {
  class TypeTags {
    constructor() {
      if (TypeTags.instance) return TypeTags.instance
      TypeTags.instance = Object.freeze(this)
    }

    static create() {
      return new TypeTags()
    }

    get(value) {
      if (typeof value !== 'string') return toString(value)
      const maybeFound = TAGS.filter(
        (meta) => TextUtils.toLower(meta.type) === TextUtils.toLower(value)
      )
      return maybeFound.length > 0 ? maybeFound[0].tag : toString(value)
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

    has(o, tag = undefined) {
      if (typeof tag !== 'string') return hasToString(o)
      return hasToString(o) && this.get(o).includes(tag)
    }

    isDefault(value) {
      let tags = TAGS.map((meta) => meta.tag)
      if (typeof value !== 'string') return tags.includes(toString(value))
      return tags.includes(value)
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
        (this.has(o) && TypedArrayRegex.test(o.toString()))
      )
    }

    assign(o, tag) {
      if (!o.toString) define(o, 'toString', Object.prototype.toString)
      return define(o, Symbol.toStringTag, tag)
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
  }

  TAGS.map((meta) => {
    const predicate = TextUtils.toPredicate(meta.type)
    TypeTags.prototype[meta.type] = meta.tag
    TypeTags.prototype[predicate] = function (value) {
      return value === meta.tag || toString(value) === meta.tag || value?.name === meta.type // prettier-ignore
    }
  })

  return TypeTags.create()
}

export const TypeTags = makeTypeTags()
