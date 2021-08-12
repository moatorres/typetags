'use strict'

import { toString, TextUtils } from '../.internal/utils'
import { Types } from './Types'

const TAGS = Types.tags()
const INIT = Types.initializers()

const getProps = Object.getOwnPropertyNames

class TypeTags {
  constructor() {
    if (TypeTags.instance) return TypeTags.instance
    TypeTags.instance = Object.freeze(this)
  }

  static create() {
    return new TypeTags()
  }

  get [Symbol.species]() {
    return TypeTags
  }

  get [Symbol.toStringTag]() {
    return 'TypeTags'
  }

  get(name) {
    if (typeof name !== 'string') return
    const toLower = (x) => String(x).toLowerCase()
    const finder = (meta) => toLower(meta.type) === toLower(name)
    const maybeFound = TAGS.filter(finder)
    return maybeFound.length > 0 ? maybeFound[0].tag : undefined
  }

  of(v) {
    if (typeof v === 'undefined') return
    const args = Array.isArray(v) ? [...v] : v
    const hasMany = args.length > 0
    const isString = typeof args === 'string'
    const types = TAGS.map((meta) => meta.type.toLowerCase())

    const found = TAGS.filter((meta) =>
      meta.type.toLowerCase() === String(args).toLowerCase()
        ? meta.tag
        : undefined
    )

    const exists =
      isString && types.includes(args.toLowerCase()) && found.length > 0

    const result = exists ? found[0].tag : undefined

    return isString && result
      ? result
      : hasMany && Array.isArray(args)
      ? args.map(toString)
      : toString(args)
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

// TAGS.map((meta) => {
//   return define(TypeTags.prototype, meta.type, {
//     get() {
//       return meta.tag
//     },
//   })
// })

TAGS.map((meta) => (TypeTags.prototype[meta.type] = meta.tag))

TAGS.map((meta) => {
  const name = TextUtils.toPredicate(meta.type)
  const available = () => !!INIT[meta.type]

  TypeTags.prototype[name] = function (value) {
    return value === meta.tag || toString(value) === meta.tag || value?.name === meta.type // prettier-ignore
  }

  TypeTags.prototype[name].available = available
})

module.exports = { TypeTags: TypeTags.create() }
