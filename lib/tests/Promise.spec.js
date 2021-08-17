import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

let promise = new Promise((v) => v) // constructor args
let promiseAll = Promise.all([]) // not a constructor
let bytes = new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])
let wasmPromise = WebAssembly.instantiate(bytes) // magic Promise

describe('Promise', () => {
  it('Should be defined', () => {
    expect(Promise).toBeDefined()
    expect(typeof promise).toEqual('object')
    expect(TypeTags.Promise).toBeDefined()
  })

  it('Should match the type tag of an "Promise" data type', () => {
    const tag = TypeTags.get(promise)

    expect(tag).toEqual(TypeTags.Promise)
    expect(toString(promise)).toEqual(TypeTags.Promise)
    expect(toString(promiseAll)).toEqual(TypeTags.Promise)
    expect(toString(wasmPromise)).toEqual(TypeTags.Promise)
    expect(promise.toString()).toEqual(TypeTags.Promise) // default
    expect(promiseAll.toString()).toEqual(TypeTags.Promise) // default
    expect(wasmPromise.toString()).toEqual(TypeTags.Promise) // default
  })
})
