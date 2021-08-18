import { ALL_TYPES } from './constants'
import { initializers } from './initializers'

describe('Initializers', () => {
  it('Should be defined', () => {
    expect(initializers).toBeDefined()
  })

  it('Should have an initializer for each type', () => {
    expect(Object.keys(initializers).length).toEqual(ALL_TYPES.length)
  })
})
