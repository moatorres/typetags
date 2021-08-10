const { toString, TextUtils } = require('../.internal/utils')
const META = require('../.internal/data/typetags.json')

const { getOwnPropertyNames: getProps, defineProperty: define } = Object

class TypeTags {
  constructor() {
    if (TypeTags.instance) return TypeTags.instance
    TypeTags.instance = this
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

META.map((meta) => {
  return define(TypeTags.prototype, meta.type, {
    get() {
      return meta.tag
    },
  })
})

META.map((meta) => {
  let name = TextUtils.toPredicate(meta.type)
  return (TypeTags.prototype[name] = function (value) {
    return value === meta.tag || toString(value) === meta.tag || value.name === meta.type // prettier-ignore
  })
})

module.exports = { TypeTags: TypeTags.create() } // production → singleton only
module.exports = { TypeTags: TypeTags.create(), Class: TypeTags } // development → singleton + class
