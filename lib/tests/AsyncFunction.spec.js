import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

let asyncFn = async function () {}
let promiseFn = () =>
  new Promise((resolve) => setTimeout(() => resolve('resolved'), 2000))
let asyncCall = async () => await promiseFn()

describe('TypeTags.AsyncFunction', () => {
  it('Should be defined', () => {
    expect(TypeTags.AsyncFunction).toBeDefined()
    expect(typeof AsyncFunction === 'undefined').toBeTrue() // syntatic, not constructor
  })

  it('Should match the type tag of an "AsyncFunction" data type', () => {
    const tagFn = getTag(asyncFn)
    const tagCall = getTag(asyncCall)

    expect(tagFn).toEqual(TypeTags.AsyncFunction)
    expect(tagCall).toEqual(TypeTags.AsyncFunction)
    expect(toString(asyncFn)).toEqual(TypeTags.AsyncFunction)
    expect(toString(asyncCall)).toEqual(TypeTags.AsyncFunction)
    expect(asyncFn.toString()).not.toEqual(TypeTags.AsyncFunction)
    expect(asyncCall.toString()).not.toEqual(TypeTags.AsyncFunction)
  })

  it('Should NOT match the type tag of a "Promise-returning" function', () => {
    const tag = getTag(promiseFn)
    expect(tag).not.toEqual(TypeTags.AsyncFunction)
    expect(toString(promiseFn)).not.toEqual(TypeTags.AsyncFunction)
    expect(promiseFn.toString()).not.toEqual(TypeTags.AsyncFunction)
  })
})
