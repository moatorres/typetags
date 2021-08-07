const fs = require('fs')
const metadata = require('./types.json')

const FILE_PATH = __dirname + '/type-init.js'
const HEAD = 'module.exports = Object.freeze({'
const TAIL = '})'

const addToFile = (name, type) => `"${name}":
typeof ${type} !== 'undefined' ? ${type} : undefined`

const handleSpecial = (TType, Meta) => {
  switch (Meta.type) {
    case 'Array Iterator':
      return '[][Symbol.iterator]()'
    case 'Map Iterator':
      return 'new Map().values()'
    case 'Set Iterator':
      return 'new Set().values()'
    case 'String Iterator':
      return '""[Symbol.iterator]()'
    case 'Generator':
      return '(function*(){})()'
    case 'GeneratorFunction':
      return 'function*(){}'
    case 'AsyncFunction':
      return 'async function(){}'
    case 'AbortSignal':
      return 'new AbortController().signal' // FIXME: only works if AbortController isAvailable, using "new Abort..." will be evaluated prior to typeof
    case 'Error':
      return TType
    default:
      return Meta.type
  }
}

const initializers = metadata
  .map((meta) => Object.entries(meta))
  .flat(1)
  .map(([TType, Meta]) => addToFile(TType, handleSpecial(TType, Meta)))
// .map(([TType, Meta]) => addToFile(TType, Meta.type))

const fileData = HEAD + initializers + TAIL

fs.writeFile(FILE_PATH, fileData, (err, res) => {
  if (err) console.log(err)
  console.log(res)
})
