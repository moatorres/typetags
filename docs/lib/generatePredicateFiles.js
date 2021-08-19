const fs = require('fs')

const types = [
  // 'AbortController',
  // 'AbortSignal',
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

const predFile = (meta) => {
  const formatNested = (meta) => {
    let a = 'WebAssembly'
    let b = 'Intl'

    if (meta.includes(a) && meta !== a) {
      return a + '.' + String(meta).slice(a.length, meta.length)
    }
    if (meta.includes(b) && meta !== b) {
      return b + '.' + String(meta).slice(b.length, meta.length)
    }

    return meta
  }

  return `# \`is${meta}()\`

### Usage

#### \`TypeTags.is${meta}(value)\`

- Checks if \`value\` **is** or **has** a default \`${formatNested(
    meta
  )}\` type tag.

\`\`\`js
const { TypeTags } = require('typetags')

let ${String(meta).toLowerCase()} = new ${meta}()
TypeTags.is${meta}(${String(meta).toLowerCase()}.toString()) // → true

let tag = TypeTags.get(${String(meta).toLowerCase()})
TypeTags.is${meta}(tag) // → true
\`\`\`

### Signature

\`\`\`ts
is${meta}(value: any): boolean
\`\`\`
`
}

types.map((n) => fs.writeFileSync(`is${n}.md`, predFile(n)))
