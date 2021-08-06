import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

const arrayFromLiteral = []
const arrayFromConstructor = new Array()

describe('Array', () => {
  it('Should be defined', () => {
    expect(Array).toBeDefined()
    expect(TypeTags.Array).toBeDefined()
  })

  it('Should match the type tag of an "Array" data type', () => {
    const tagOne = getTag(arrayFromConstructor)
    const tagTwo = getTag(arrayFromLiteral)

    expect(tagOne).toEqual(tagTwo)
    expect(tagOne).toEqual(TypeTags.Array)
    expect(tagTwo).toEqual(TypeTags.Array)
    expect(toString(arrayFromLiteral)).toEqual(TypeTags.Array)
    expect(toString(arrayFromConstructor)).toEqual(TypeTags.Array)
    expect(arrayFromLiteral.toString()).not.toEqual(TypeTags.Array)
    expect(arrayFromConstructor.toString()).not.toEqual(TypeTags.Array)
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = getTag(Array)
    expect(tag).not.toEqual(TypeTags.Array)
    expect(toString(Array)).not.toEqual(TypeTags.Array)
    expect(Array.toString()).not.toEqual(TypeTags.Array)
  })
})
