'use strict'

import { ALL_TYPES } from './types'
import { TextUtils } from './utils'

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

export const generateTypetags = () => ALL_TYPES.map(metaSchema)
