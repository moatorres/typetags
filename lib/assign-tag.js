'use strict'

import { define } from './.internal/utils'

export const defineToString = (o, tag) => {
  define(o, 'toString', Object.prototype.toString)
  return define(o, Symbol.toStringTag, tag)
}

export const addTag = (o, tag) => define(o, Symbol.toStringTag, tag)

export const assignTag = (o, tag) => {
  if (!o.toString) return defineToString(o, tag)
  else return addTag(o, tag)
}
