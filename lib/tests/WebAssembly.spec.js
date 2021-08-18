import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

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
    const tag = TypeTags.get(wasm)

    expect(wasm).toEqual(WebAssembly)
    expect(tag).toEqual(TypeTags.WebAssembly)
    expect(toString(wasm)).toEqual(TypeTags.WebAssembly)
    expect(wasm.toString()).toEqual(TypeTags.WebAssembly) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = TypeTags.get(wasm.toFixed)
    expect(tag).not.toEqual(TypeTags.WebAssembly)
    expect(wasm.toString()).toEqual(TypeTags.WebAssembly)
    expect(toString(wasm.toExponential)).not.toEqual(TypeTags.WebAssembly)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isWebAssembly).toBeDefined()
    expect(TypeTags.isWebAssembly(wasm)).toBeTrue()
    expect(TypeTags.isWebAssembly(toString(wasm))).toBeTrue()
    expect(TypeTags.isWebAssembly(TypeTags.WebAssembly)).toBeTrue()
  })
})

describe('WebAssembly.Module', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Module']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.Module" data type', () => {
    expect(TypeTags.get(wasmModule)).toEqual(TypeTags['WebAssembly.Module'])
    expect(toString(wasmModule)).toEqual(TypeTags['WebAssembly.Module'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isWebAssemblyModule).toBeDefined()
    expect(TypeTags.isWebAssemblyModule(wasmModule)).toBeTrue()
    expect(TypeTags.isWebAssemblyModule(toString(wasmModule))).toBeTrue()
    expect(
      TypeTags.isWebAssemblyModule(TypeTags['WebAssembly.Module'])
    ).toBeTrue()
  })
})

describe('WebAssembly.Global', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Global']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.Global" data type', () => {
    expect(TypeTags.get(wasmGlobal)).toEqual(TypeTags['WebAssembly.Global'])
    expect(toString(wasmGlobal)).toEqual(TypeTags['WebAssembly.Global'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isWebAssemblyGlobal).toBeDefined()
    expect(TypeTags.isWebAssemblyGlobal(wasmGlobal)).toBeTrue()
    expect(TypeTags.isWebAssemblyGlobal(toString(wasmGlobal))).toBeTrue()
    expect(
      TypeTags.isWebAssemblyGlobal(TypeTags['WebAssembly.Global'])
    ).toBeTrue()
  })
})

describe('WebAssembly.Instance', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Instance']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.Instance" data type', () => {
    expect(TypeTags.get(wasmInstance)).toEqual(TypeTags['WebAssembly.Instance'])
    expect(toString(wasmInstance)).toEqual(TypeTags['WebAssembly.Instance'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isWebAssemblyInstance).toBeDefined()
    expect(TypeTags.isWebAssemblyInstance(wasmInstance)).toBeTrue()
    expect(TypeTags.isWebAssemblyInstance(toString(wasmInstance))).toBeTrue()
    expect(
      TypeTags.isWebAssemblyInstance(TypeTags['WebAssembly.Instance'])
    ).toBeTrue()
  })
})

describe('WebAssembly.Memory', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Memory']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.Memory" data type', () => {
    expect(TypeTags.get(wasmMemory)).toEqual(TypeTags['WebAssembly.Memory'])
    expect(toString(wasmMemory)).toEqual(TypeTags['WebAssembly.Memory'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isWebAssemblyMemory).toBeDefined()
    expect(TypeTags.isWebAssemblyMemory(wasmMemory)).toBeTrue()
    expect(TypeTags.isWebAssemblyMemory(toString(wasmMemory))).toBeTrue()
    expect(
      TypeTags.isWebAssemblyMemory(TypeTags['WebAssembly.Memory'])
    ).toBeTrue()
  })
})

describe('WebAssembly.Table', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.Table']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.Table" data type', () => {
    expect(TypeTags.get(wasmTable)).toEqual(TypeTags['WebAssembly.Table'])
    expect(toString(wasmTable)).toEqual(TypeTags['WebAssembly.Table'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isWebAssemblyTable).toBeDefined()
    expect(TypeTags.isWebAssemblyTable(wasmTable)).toBeTrue()
    expect(TypeTags.isWebAssemblyTable(toString(wasmTable))).toBeTrue()
    expect(
      TypeTags.isWebAssemblyTable(TypeTags['WebAssembly.Table'])
    ).toBeTrue()
  })
})

describe('WebAssembly.CompileError', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.CompileError']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.CompileError" data type', () => {
    expect(TypeTags.get(wasmCompileError)).toEqual(
      TypeTags['WebAssembly.CompileError']
    )
    expect(toString(wasmCompileError)).toEqual(
      TypeTags['WebAssembly.CompileError']
    )
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isWebAssemblyCompileError).toBeDefined()
    expect(TypeTags.isWebAssemblyCompileError(wasmCompileError)).toBeTrue()
    expect(
      TypeTags.isWebAssemblyCompileError(toString(wasmCompileError))
    ).toBeTrue()
    expect(
      TypeTags.isWebAssemblyCompileError(TypeTags['WebAssembly.CompileError'])
    ).toBeTrue()
  })
})

describe('WebAssembly.LinkError', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.LinkError']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.LinkError" data type', () => {
    expect(TypeTags.get(wasmLinkError)).toEqual(
      TypeTags['WebAssembly.LinkError']
    )
    expect(toString(wasmLinkError)).toEqual(TypeTags['WebAssembly.LinkError'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isWebAssemblyLinkError).toBeDefined()
    expect(TypeTags.isWebAssemblyLinkError(wasmLinkError)).toBeTrue()
    expect(TypeTags.isWebAssemblyLinkError(toString(wasmLinkError))).toBeTrue()
    expect(
      TypeTags.isWebAssemblyLinkError(TypeTags['WebAssembly.LinkError'])
    ).toBeTrue()
  })
})

describe('WebAssembly.RuntimeError', () => {
  it('Should be defined', () => {
    expect(TypeTags['WebAssembly.RuntimeError']).toBeDefined()
  })

  it('Should match the type tag of an "WebAssembly.RuntimeError" data type', () => {
    expect(TypeTags.get(wasmRuntimeError)).toEqual(
      TypeTags['WebAssembly.RuntimeError']
    )
    expect(toString(wasmRuntimeError)).toEqual(
      TypeTags['WebAssembly.RuntimeError']
    )
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isWebAssemblyRuntimeError).toBeDefined()
    expect(TypeTags.isWebAssemblyRuntimeError(wasmRuntimeError)).toBeTrue()
    expect(
      TypeTags.isWebAssemblyRuntimeError(toString(wasmRuntimeError))
    ).toBeTrue()
    expect(
      TypeTags.isWebAssemblyRuntimeError(TypeTags['WebAssembly.RuntimeError'])
    ).toBeTrue()
  })
})
