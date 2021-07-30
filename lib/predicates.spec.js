import { hasDefaultTag, isDefaultTag } from './predicates'

const object = { foo: 'bar' }
const validTag = '[object Function]'
const invalidTag = '[object Hey]'

describe('isDefaultTag', () => {
  it('Should be defined', () => {
    expect(isDefaultTag).toBeDefined()
  })

  it('Should allow us to check if a string is a default tag value', () => {
    expect(isDefaultTag(validTag)).toBeTrue()
    expect(isDefaultTag(invalidTag)).toBeFalse()
  })
})

describe('hasDefaultTag', () => {
  it('Should be defined', () => {
    expect(hasDefaultTag).toBeDefined()
  })

  it('Should return "true" if the value has a default tag', () => {
    expect(hasDefaultTag(object)).toBeTrue()
    expect(isDefaultTag(object.toString())).toBeTrue()
  })

  it('Should return "false" if the receives an datatype that does NOT have a default tag', () => {
    function User(name) {
      this.name = name
    }

    const jack = new User('Jack')

    User.prototype.toString = function () {
      return `${this.name}`
    }

    expect(isDefaultTag(jack.toString())).toBeFalse()
    expect(hasDefaultTag(jack)).toBeFalse()
  })
})
