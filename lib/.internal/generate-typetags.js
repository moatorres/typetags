const fs = require('fs')
const { ALL_TYPES } = require('./types')
const { TextUtils } = require('./utils')

const FILE_PATH = __dirname + '/data/typetags.json'

const shouldLower = (s) =>
  /^(?:window|process|global|console|globalthis)$/.test(s)

const formatTag = (str) => {
  let name = TextUtils.toLower(str)

  if (name.includes('error')) return 'Error'
  if (name.includes('iterator')) return TextUtils.toRemoveDot(str)
  if (/^(?:nan|infinity)$/.test(name)) return 'Number'
  if (shouldLower(name)) return TextUtils.toFirstLower(str)

  return str
}

const metaSchema = (type) => ({
  type: type,
  tag: `[object ${formatTag(type)}]`,
})

const writeToFile = (o) => fs.writeFileSync(FILE_PATH, JSON.stringify(o))

// console.log(ALL_TYPES.map(metaSchema))
writeToFile(ALL_TYPES.map(metaSchema))
