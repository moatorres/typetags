import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

let atoms = Atomics

describe('Atomics', () => {
  it('Should be defined', () => {
    expect(Atomics).toBeDefined() // object, not constructor
    expect(TypeTags.Atomics).toBeDefined()
  })

  it('Should match the type tag of an "Atomics" data type', () => {
    const tag = TypeTags.get(atoms)

    expect(tag).toEqual(TypeTags.Atomics)
    expect(toString(atoms)).toEqual(TypeTags.Atomics)
    expect(atoms.toString()).toEqual(TypeTags.Atomics) // default behavior
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = TypeTags.get(atoms.add)
    expect(tag).not.toEqual(TypeTags.Atomics)
    expect(atoms.load.toString()).not.toEqual(TypeTags.Atomics)
    expect(toString(atoms.exchange)).not.toEqual(TypeTags.Atomics)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isAtomics).toBeDefined()
    expect(TypeTags.isAtomics(atoms)).toBeTrue()
    expect(TypeTags.isAtomics(toString(atoms))).toBeTrue()
    expect(TypeTags.isAtomics(TypeTags.Atomics)).toBeTrue()
  })
})
