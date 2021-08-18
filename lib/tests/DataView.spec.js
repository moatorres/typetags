import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

const buffer = new SharedArrayBuffer(12)
const view = new DataView(buffer) // constructor args

describe('DataView', () => {
  it('Should be defined', () => {
    expect(DataView).toBeDefined()
    expect(TypeTags.DataView).toBeDefined()
  })

  it('Should match the type tag of a "DataView" data type', () => {
    const tag = TypeTags.get(view)
    expect(tag).toEqual(TypeTags.DataView)
    expect(toString(view)).toEqual(TypeTags.DataView)
    expect(view.toString()).toEqual(TypeTags.DataView) // default
  })

  it('Should NOT match the type tag of its constructor', () => {
    const tag = TypeTags.get(DataView)
    expect(tag).not.toEqual(TypeTags.DataView)
    expect(toString(DataView)).not.toEqual(TypeTags.DataView)
    expect(DataView.toString()).not.toEqual(TypeTags.DataView)
  })
})
