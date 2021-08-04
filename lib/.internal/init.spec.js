import { Types } from './init'

describe('.internal/init', () => {
  it('Should be defined', () => {
    expect(Types).toBeDefined()
  })

  it('Should be an object with boolean values', () => {
    let res = Object.entries(Types).every(
      ([_, value]) => typeof value === 'boolean'
    )
    expect(res).toBeTrue()
  })
})
