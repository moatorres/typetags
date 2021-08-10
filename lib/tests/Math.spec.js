import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

let math = Math // static object

describe('Math', () => {
  it('Should be defined', () => {
    expect(Math).toBeDefined() // static object
    expect(TypeTags.Math).toBeDefined()
  })

  it('Should match the type tag of an "Math" data type', () => {
    const tag = getTag(math)

    expect(tag).toEqual(TypeTags.Math)
    expect(toString(math)).toEqual(TypeTags.Math)
    expect(math.toString()).toEqual(TypeTags.Math) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = getTag(math.floor)
    expect(tag).not.toEqual(TypeTags.Math)
    expect(math.toString()).toEqual(TypeTags.Math) // default
    expect(toString(math.LOG2E)).not.toEqual(TypeTags.Math)
  })
})