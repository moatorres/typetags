import getTag from '../get-tag'
import { TypeTags } from '../type-tags'
import { toString } from '../.internal/utils'

let buffer = new Uint8Array([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])

let wasm = WebAssembly
let wasmModule = new WebAssembly.Module(buffer)
let wasmGlobal = new WebAssembly.Global({ value: 'i32', mutable: true }, 0)
let wasmInstance = new WebAssembly.Instance(wasmModule, {})
let wasmMemory = new WebAssembly.Memory({ initial: 1, max: 10 })
let wasmTable = new WebAssembly.Table({ initial: 1, element: 'anyfunc' })
let wasmCompileError = new WebAssembly.CompileError()
let wasmLinkError = new WebAssembly.LinkError()
let wasmRuntimeError = new WebAssembly.RuntimeError()

describe('WebAssembly', () => {
  it('Should be defined', () => {
    expect(WebAssembly).toBeDefined()
    expect(TypeTags.WebAssembly).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly" data type', () => {
    const tag = getTag(wasm)

    expect(wasm).toEqual(WebAssembly)
    expect(tag).toEqual(TypeTags.WebAssembly)
    expect(toString(wasm)).toEqual(TypeTags.WebAssembly)
    expect(wasm.toString()).toEqual(TypeTags.WebAssembly) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = getTag(wasm.toFixed)
    expect(tag).not.toEqual(TypeTags.WebAssembly)
    expect(wasm.toString()).toEqual(TypeTags.WebAssembly)
    expect(toString(wasm.toExponential)).not.toEqual(TypeTags.WebAssembly)
  })
})

describe('WebAssembly.Module', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Module']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.Module" data type', () => {
    expect(getTag(wasmModule)).toEqual(TypeTags['WebAssembly.Module'])
    expect(toString(wasmModule)).toEqual(TypeTags['WebAssembly.Module'])
  })
})

describe('WebAssembly.Global', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Global']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.Global" data type', () => {
    expect(getTag(wasmGlobal)).toEqual(TypeTags['WebAssembly.Global'])
    expect(toString(wasmGlobal)).toEqual(TypeTags['WebAssembly.Global'])
  })
})

describe('WebAssembly.Instance', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Instance']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.Instance" data type', () => {
    expect(getTag(wasmInstance)).toEqual(TypeTags['WebAssembly.Instance'])
    expect(toString(wasmInstance)).toEqual(TypeTags['WebAssembly.Instance'])
  })
})

describe('WebAssembly.Memory', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Memory']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.Memory" data type', () => {
    expect(getTag(wasmMemory)).toEqual(TypeTags['WebAssembly.Memory'])
    expect(toString(wasmMemory)).toEqual(TypeTags['WebAssembly.Memory'])
  })
})

describe('WebAssembly.Table', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Table']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.Table" data type', () => {
    expect(getTag(wasmTable)).toEqual(TypeTags['WebAssembly.Table'])
    expect(toString(wasmTable)).toEqual(TypeTags['WebAssembly.Table'])
  })
})

describe('WebAssembly.CompileError', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.CompileError']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.CompileError" data type', () => {
    expect(getTag(wasmCompileError)).toEqual(
      TypeTags['WebAssembly.CompileError']
    )
    expect(toString(wasmCompileError)).toEqual(
      TypeTags['WebAssembly.CompileError']
    )
  })
})

describe('WebAssembly.LinkError', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.LinkError']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.LinkError" data type', () => {
    expect(getTag(wasmLinkError)).toEqual(TypeTags['WebAssembly.LinkError'])
    expect(toString(wasmLinkError)).toEqual(TypeTags['WebAssembly.LinkError'])
  })
})

describe('WebAssembly.RuntimeError', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.RuntimeError']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.RuntimeError" data type', () => {
    expect(getTag(wasmRuntimeError)).toEqual(
      TypeTags['WebAssembly.RuntimeError']
    )
    expect(toString(wasmRuntimeError)).toEqual(
      TypeTags['WebAssembly.RuntimeError']
    )
  })
})
