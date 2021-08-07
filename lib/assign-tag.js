import { define } from './.internal/utils'

export const defineToString = (o, tag) => {
  define(o, 'toString', Object.prototype.toString)
  return define(o, Symbol.toStringTag, tag)
}

export const addTag = (o, tag) => define(o, Symbol.toStringTag, tag)

export const changeToString = (o, fn) => define(o.__proto__, 'toString', fn) // FIXME: Should not mutate the prototype

export const assignTag = (o, tag) => {
  if (!o.toString) return defineToString(o, tag)
  else return addTag(o, tag)
}
