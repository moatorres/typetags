import { missing, unavailable, available, tags, types } from './compare'

describe('.internal/compare', () => {
  it('We should have a list of all typetags', () => {
    expect(tags.length).toBeDefined()
  })

  it('We should have a list of available types', () => {
    expect(available.length).toBeDefined()
  })

  it('We should have a list of unavailable types', () => {
    expect(unavailable.length).toBeDefined()
  })

  it('We should have a zerosum between available and unavailable types', () => {
    let zerosum = tags.length - available.length - unavailable.length
    expect(zerosum).toEqual(0)
  })

  it('Each type should have an initializer', () => {
    expect(missing).toEqual([])
    expect(missing.length).toEqual(0)
    expect(types.length).toEqual(tags.length)
  })
})
