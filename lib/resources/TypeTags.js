const { toString } = require('../.internal/utils')

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

const META = [
  {
    type: 'Array',
    tag: '[object Array]',
  },
  {
    type: 'Boolean',
    tag: '[object Boolean]',
  },
]

META.map((meta) => {
  return define(TypeTags.prototype, meta.type, {
    get() {
      return meta.tag
    },
  })
})

META.map((meta) => {
  let name = 'is' + meta.type
  return (TypeTags.prototype[name] = function (value) {
    return value === meta.tag || toString(value) === meta.tag || value.name === meta.type // prettier-ignore
  })
})

// const instance = TypeTags.create()

// for (let n of TypeTags) {
//   console.log(n)
// }

// console.log('Class →', TypeTags)
// console.log('Class Methods →', getProps(TypeTags.prototype))
// console.log('Instance Tag →', toString(instance))
// console.log('Instance Methods →', getProps(instance))
// console.log('Instance Species →', instance[Symbol.species])
// console.log('Instance instanceof TypeTags →', instance instanceof TypeTags)
// console.log('Instance.isArray([]) →', instance.isArray([]))
// console.log('Instance.Array →', instance.Array)

module.exports = { TypeTags: TypeTags.create() } // production → singleton only
module.exports = { TypeTags: TypeTags.create(), Class: TypeTags } // development → singleton + class
