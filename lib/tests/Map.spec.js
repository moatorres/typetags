import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

let map = new Map()
let mapIterator = new Map().values()

describe('Map', () => {
  it('Should be defined', () => {
    expect(Map).toBeDefined() // static object
    expect(TypeTags.Map).toBeDefined()
  })

  it('Should match the type tag of an "Map" data type', () => {
    const tag = TypeTags.get(map)

    expect(tag).toEqual(TypeTags.Map)
    expect(toString(map)).toEqual(TypeTags.Map)
    expect(map.toString()).toEqual(TypeTags.Map) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = TypeTags.get(map.toFixed)
    expect(tag).not.toEqual(TypeTags.Map)
    expect(map.toString()).toEqual(TypeTags.Map) // default
    expect(toString(map.toExponential)).not.toEqual(TypeTags.Map)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isMap).toBeDefined()
    expect(TypeTags.isMap(map)).toBeTrue()
    expect(TypeTags.isMap(toString(map))).toBeTrue()
    expect(TypeTags.isMap(TypeTags.Map)).toBeTrue()
  })
})

describe('Map Iterator', () => {
  it('Should be defined', () => {
    expect(TypeTags['Map.Iterator']).toBeDefined()
  })

  it('Should match the type tag of an "Map Iterator" data type', () => {
    const tag = TypeTags.get(mapIterator)
    expect(tag).toEqual(TypeTags['Map.Iterator'])
    expect(toString(mapIterator)).toEqual(TypeTags['Map.Iterator'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isMapIterator).toBeDefined()
    expect(TypeTags.isMapIterator(map.values())).toBeTrue()
    expect(TypeTags.isMapIterator(toString(map.values()))).toBeTrue()
    expect(TypeTags.isMapIterator(TypeTags['Map.Iterator'])).toBeTrue()
  })
})
