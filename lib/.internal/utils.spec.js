import * as utils from './utils'
import { TypeTags } from '../resources/TypeTags'

describe('toString', () => {
  it('Should be defined', () => {
    expect(utils.toString).toBeDefined()
  })

  it('Should be able be invoked over any value', () => {
    expect(utils.toString('')).toEqual(TypeTags.String)
    expect(utils.toString([])).toEqual(TypeTags.Array)
    expect(utils.toString(1)).toEqual(TypeTags.Number)
  })
})

describe('hasOwn', () => {
  it('Should be defined', () => {
    expect(utils.hasOwn).toBeDefined()
  })

  it('Should allow us to check if a property exists on an object', () => {
    let res = utils.hasOwn(TypeTags.constructor.prototype, 'Array')
    expect(res).toBeTrue()
    expect(typeof res).toEqual('boolean')
  })
})

describe('define', () => {
  it('Should be defined', () => {
    expect(utils.define).toBeDefined()
  })

  it('Should allow us to define a property to any object', () => {
    const o = {}
    expect(o.hey).not.toBeDefined()

    utils.define(o, 'hey', () => 'hey')
    expect(o.hey).toBeDefined()
    expect(o.hey()).toEqual('hey')
  })
})

describe('defineToString', () => {
  it('Should be defined', () => {
    expect(utils.defineToString).toBeDefined()
  })

  it('Should allow us to add a "toString" method to any object', () => {
    const empty = Object.create(null)
    expect(empty.toString).not.toBeDefined()
    utils.defineToString(empty)
    expect(empty.toString).toBeDefined()
  })
})
