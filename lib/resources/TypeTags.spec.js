import { TypeTags, Class } from './TypeTags'

const toString = (v) => Object.prototype.toString.call(v)
const { getOwnPropertyNames: getProps } = Object

describe('TypeTags', () => {
  it('Should be defined', () => {
    expect(TypeTags).toBeDefined()
  })

  describe('Should be awesome', () => {
    const instance = Class.create()

    for (let n of Class) {
      console.log(n)
    }

    for (let n in Class) {
      console.log(n)
    }

    for (let n of instance) {
      console.log(n)
    }

    for (let n in instance) {
      console.log(n)
    }

    console.log('Class →', Class)
    console.log('Class Methods →', getProps(Class.prototype))
    console.log('Instance Tag →', toString(instance))
    console.log('Instance Methods →', getProps(instance))
    console.log('Instance Species →', instance[Symbol.species])
    console.log('Instance instanceof TypeTags →', instance instanceof Class)
    console.log('Instance.isArray([]) →', instance.isArray([]))
    console.log('Instance.Array →', instance.Array)

    expect(Class).toBeDefined()
  })
})
