import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

let atoms = Atomics

describe('Atomics', () => {
  it('Should be defined', () => {
    expect(Atomics).toBeDefined() // object, not constructor
    expect(TypeTags.Atomics).toBeDefined()
  })

  it('Should match the type tag of an "Atomics" data type', () => {
    const tag = getTag(atoms)

    expect(tag).toEqual(TypeTags.Atomics)
    expect(toString(atoms)).toEqual(TypeTags.Atomics)
    expect(atoms.toString()).toEqual(TypeTags.Atomics) // default behavior
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = getTag(atoms.add)
    expect(tag).not.toEqual(TypeTags.Atomics)
    expect(atoms.load.toString()).not.toEqual(TypeTags.Atomics)
    expect(toString(atoms.exchange)).not.toEqual(TypeTags.Atomics)
  })
})
