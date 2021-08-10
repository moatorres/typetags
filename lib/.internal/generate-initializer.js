const fs = require('fs')
const { TextUtils } = require('./utils')
const metadata = require('./data/typetags.json')

const FILE_PATH = __dirname + '/init/index.js'
const HEAD = 'module.exports = Object.freeze({'
const TAIL = '})'

const shouldLower = (s) =>
  /^(?:arguments|window|process|global|console|globalthis|null|undefined)$/.test(
    s
  )

const formatChild = (name) => {
  const initializer = {
    'Array.Iterator': '[][Symbol.iterator]()',
    'Map.Iterator': 'new Map().values()',
    'Set.Iterator': 'new Set().values()',
    'String.Iterator': '""[Symbol.iterator]()',
    Generator: '(function*(){})()',
    GeneratorFunction: 'function*(){}',
    AsyncFunction: 'async function(){}',
    AbortSignal: 'new AbortController().signal',
  }

  if (initializer[name]) return initializer[name]

  return shouldLower(name.toLowerCase()) ? TextUtils.toFirstLower(name) : name
}

const formatParent = (type) => {
  const initializer = {
    'Map.Iterator': 'Map',
    'Set.Iterator': 'Set',
    AbortSignal: 'AbortController',
  }

  if (initializer[type]) return initializer[type]

  return shouldLower(type.toLowerCase()) ? TextUtils.toFirstLower(type) : type
}

const addToFile = (name, type) => `"${name}":
typeof ${formatChild(type)} !== 'undefined' ? ${formatChild(name)} : undefined`

const initializers = metadata.map((meta) => {
  return addToFile(meta.type, formatParent(meta.type))
})

const fileData = HEAD + initializers + TAIL

// console.log(fileData)
fs.writeFileSync(FILE_PATH, fileData)