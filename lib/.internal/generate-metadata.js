const fs = require('fs')
const { toString } = require('./utils')
const { PRIMITIVE_TYPES, NESTED_TYPES } = require('./types')
const initializer = require('./init')

const types = Object.entries(initializer)

const FILE_PATH = __dirname + '/data/metadata.json'

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

const isPrimitive = (name) => ({
  isPrimitive: PRIMITIVE_TYPES.some((p) => name.toLowerCase() === p),
})

const isSyntatic = (type) => {
  let tag = toString(type)
  let syntaticTags = [
    '[object AsyncFunction]',
    '[object Arguments]',
    '[object Generator]',
    '[object GeneratorFunction]',
    '[object Null]',
    '[object Undefined]',
  ]
  let found = syntaticTags.filter((t) => t === tag).length > 0
  return { isSyntatic: found ? true : false }
}

const withName = (name) => ({ name })

const withInstance = (type) => ({
  instance: typeof type !== undefined ? type : 'undefined',
})

// TODO:
// needs an instance factory for bad args
// e.g. DataView(arrayBuff), Promise((y,n)=>y), etc...
const withTag = (type) => ({
  tag: !!isConstructor(type).isConstructor
    ? toString(new type())
    : !!isInstantiable(type).isInstantiable
    ? toString(type())
    : toString(type),
})

const isNested = (name) => ({
  isNested: NESTED_TYPES.some((nested) => name === nested),
})

const isIterator = (name) => ({
  isIterator: name.toLowerCase().includes('iterator'),
})

const isStringifiable = (type) => {
  try {
    JSON.stringify(type)
  } catch (e) {
    // console.error(e)
    return { istStringifiable: false }
  }
  return { istStringifiable: true }
}

const getReport = (name, type) => ({
  ...withName(name),
  // ...withInstance(type), // FIXME: some instances can't be stringified
  ...getTypeOf(type),
  ...isPrimitive(name),
  ...inGlobal(name),
  ...isAvailable(type),
  ...isConstructor(type),
  ...isInstantiable(type),
  ...isStringifiable(type),
  ...isSyntatic(type),
  ...isNested(name),
  ...isIterator(name),
  ...withTag(type),
  // ...isStatic(type),
})

const rep = types.reduce((result, [name, type]) => {
  result[name] = getReport(name, type)

  // count result index excluding __Report
  const typesLength = Object.keys(result).length - 1

  // all available types
  const countAvailable = Object.entries(result).filter(([_, o]) => !!o.isAvailable).length // prettier-ignore

  // types minus available types
  const countUnavailable = typesLength - countAvailable

  // list missing types' names
  const missingTypes = Object.entries(result)
    .filter(([n, o]) => !o.isAvailable && n !== '__Report')
    .map(([n, _]) => n)

  // count types in global
  const countGlobals = Object.entries(result).filter(([_, o]) => !!o.inGlobal).length // prettier-ignore

  // don't bother if it's unavailable
  if (!result[name].isAvailable) result[name] = { ...isAvailable(type) }

  // result['__Report'] = {
  //   total: typesLength,
  //   available: countAvailable,
  //   unavailable: countUnavailable,
  //   globals: countGlobals,
  //   missing: missingTypes,
  // }

  return result
}, {})

const writeToFile = (str) => fs.writeFileSync(FILE_PATH, JSON.stringify(str))

// console.log(rep)
writeToFile(rep)
