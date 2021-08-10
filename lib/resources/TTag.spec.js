import { TTag } from './TTag'

describe('TTag', () => {
  it('Should be defined', () => {
    expect(TTag).toBeDefined()
  })

  it('Should work', () => {
    console.log(TTag.of('Atomics')) // add list of types d.ts
    console.log(TTag.get(Atomics))
  })
})
