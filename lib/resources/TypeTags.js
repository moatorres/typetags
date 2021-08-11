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
