const fs = require('fs')

const types = [
  'AbortController',
  'AbortSignal',
  'AggregateError',
  'Arguments',
  'Array',
  'Array.Iterator',
  'ArrayBuffer',
  'AsyncFunction',
  'AsyncGenerator',
  'AsyncGeneratorFunction',
  'Atomics',
  'BigInt',
  'BigInt64Array',
  'BigUint64Array',
  'Boolean',
  'Console',
  'DataView',
  'Date',
  'Generator',
  'GeneratorFunction',
  'Error',
  'EvalError',
  'FinalizationRegistry',
  'Float32Array',
  'Float64Array',
  'Function',
  'GlobalThis',
  'Global',
  'Infinity',
  'Int8Array',
  'Int16Array',
  'Int32Array',
  'Intl',
  'IntlCollator',
  'IntlDateTimeFormat',
  'IntlListFormat',
  'IntlLocale',
  'IntlNumberFormat',
  'IntlPluralRules',
  'IntlRelativeTimeFormat',
  'JSON',
  'Map',
  'MapIterator',
  'Math',
  'NaN ',
  'Null',
  'Number',
  'Object',
  'Process',
  'Promise',
  'RangeError',
  'ReferenceError',
  'RegExp',
  'Reflect',
  'Set',
  'SetIterator',
  'SharedArrayBuffer',
  'String',
  'String.Iterator',
  'Symbol',
  'SyntaxError',
  'TextDecoder',
  'TextEncoder',
  'TypeError',
  'Uint8Array',
  'Uint8ClampedArray',
  'Uint16Array',
  'Uint32Array',
  'Undefined',
  'URIError',
  'URL',
  'URLSearchParams',
  'WeakMap',
  'WeakRef',
  'WeakSet',
  'WebAssembly',
  'WebAssemblyModule',
  'WebAssemblyGlobal',
  'WebAssemblyInstance',
  'WebAssemblyMemory',
  'WebAssemblyTable',
  'WebAssemblyCompileError',
  'WebAssemblyLinkError',
  'WebAssemblyRuntimeError',
]

const hasAlias = (meta) =>
  String(meta).includes('WebAssembly') ||
  String(meta).includes('AsyncGeneratorFunction')

const formatOutput = (meta) => {
  let wasm = 'WebAssembly'

  if (meta.includes(wasm))
    return 'Wasm' + String(meta).slice(wasm.length, meta.length)
  if (meta.includes('AsyncGeneratorFunction')) return 'AsyncGenFn'

  return meta
}

const predFile = (meta) => {
  let formatted = formatOutput(meta)

  return `# TypeTags \`.is${formatted}\`

### Usage

#### \`TypeTags.is${formatted}(value)\`

- Checks if \`value\` **is** or **has** a default \`${meta}\` type tag.

\`\`\`js
const { TypeTags } = require('typetags')

let ${String(meta).toLowerCase()} = new ${meta}()

TypeTags.is${formatted}(${String(meta).toLowerCase()})
// → true

TypeTags.is${formatted}(${String(meta).toLowerCase()}.toString())
// → true
\`\`\`

### Signature

\`\`\`ts
is${formatted}(value: any): boolean ${
    hasAlias(meta) ? `\nis${meta}(value: any): boolean` : ''
  }
\`\`\`
`
}

types.map((n) => fs.writeFileSync(`is${n}.md`, predFile(n)))
