const inits = require('./type-init')
const types = Object.entries(inits)

const getTypeOf = (v) => ({ typeof: typeof v })
const isAvailable = (v) => ({ isAvailable: typeof v !== 'undefined' })
const inGlobal = (v) => ({ inGlobal: v in global })

const isConstructor = (type) => {
  try {
    new type()
  } catch (e) {
    // console.error(e)
    return { isConstructor: false }
  }
  return { isConstructor: true }
}

const isInstantiable = (type) => {
  try {
    type()
  } catch (e) {
    // console.error(e)
    return { isInstantiable: false }
  }
  return { isInstantiable: true }
}

let PRIMITIVES = [
  'boolean',
  'string',
  'bigint',
  'number',
  'undefined',
  'symbol',
  'function',
  'null',
]

const isPrimitive = (name) => ({
  isPrimitive: PRIMITIVES.some((p) => name.toLowerCase() === p),
})

const isSyntatic = (type) => {
  let argsss
  ;(function args() {
    args = arguments
  })()

  let tag = Object.prototype.toString.call(type)

  let syntatics = [
    argsss,
    async function () {}, // unused
    function* () {}, // unused
    (function* () {})(), // unused
    null,
    undefined,
  ]

  let syntaticTags = [
    '[object AsyncFunction]',
    '[object arguments]',
    '[object Generator]',
    '[object GeneratorFunction]',
    '[object Null]',
    '[object Undefined]',
  ]

  return {
    isSyntatic:
      syntatics.some((synt) => type === synt) || syntaticTags.includes(tag),
  }
}

const withName = (name) => ({ name })

const withInstance = (type) => ({
  instance: typeof type !== undefined ? type : 'undefined',
})

// TODO: needs an instance factory for bad args e.g. DataView(arrayBuff)
// Promise((y,n)=>y)
// etc...
const withTag = (type) => ({
  tag: !!isConstructor(type).isConstructor
    ? Object.prototype.toString.call(new type())
    : !!isInstantiable(type).isInstantiable
    ? Object.prototype.toString.call(type())
    : Object.prototype.toString.call(type),
})

// TODO: has to be checked if available somewhere before here
let NESTED_TYPES = [
  Intl.Collator,
  Intl.DateTimeFormat,
  Intl.ListFormat,
  Intl.Locale,
  Intl.NumberFormat,
  Intl.PluralRules,
  Intl.RelativeTimeFormat,
  WebAssembly.Module,
  WebAssembly.Global,
  WebAssembly.Instance,
  WebAssembly.Memory,
  WebAssembly.Table,
  WebAssembly.CompileError,
  WebAssembly.LinkError,
  WebAssembly.RuntimeError,
]

const isNested = (type) => ({
  isNested: NESTED_TYPES.some((nested) => type === nested),
})

const isStatic = (type) => {
  try {
    type()
  } catch (e) {
    // console.error(e)
    return e.message.includes('is not a function')
      ? { isStatic: true }
      : { isStatic: false }
  }
}

const isIterator = (name) => ({
  isIterator: name.toLowerCase().includes('iterator'),
})

const getReport = (name, type) => ({
  ...withName(name),
  // ...withInstance(type), // FIXME: some instances can't be stringified
  ...getTypeOf(type),
  ...isPrimitive(name),
  ...inGlobal(name),
  ...isAvailable(type),
  ...isConstructor(type),
  ...isInstantiable(type),
  ...isSyntatic(type),
  ...isNested(type),
  ...isIterator(name),
  ...withTag(type),
  ...isStatic(type),
})

const rep = types.reduce((result, [name, type]) => {
  result[name] = getReport(name, type)

  // cound types from reduction excluding the __Report itself -> initializers.length - 1
  const typesLength = Object.keys(result).length - 1

  // count all available types
  const countAvailable = Object.entries(result).filter(([_, o]) => !!o.isAvailable).length // prettier-ignore

  // all types minus available types
  const countUnavailable = typesLength - countAvailable

  // list missing types' names
  const missingTypes = Object.entries(result)
    .filter(([n, o]) => !o.isAvailable && n !== '__Report')
    .map(([n, _]) => n)

  // count types in global
  const countGlobals = Object.entries(result).filter(([_, o]) => !!o.inGlobal).length // prettier-ignore

  // don't bother if unavailable
  if (!result[name].isAvailable) result[name] = { ...isAvailable(type) }

  result['__Report'] = {
    total: typesLength,
    available: countAvailable,
    unavailable: countUnavailable,
    globals: countGlobals,
    missing: missingTypes,
  }

  return result
}, {})

console.log(rep)
// console.log(JSON.stringify(rep))
