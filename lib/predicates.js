import { TypeTags } from './type-tags'

const tags = Object.values(TypeTags)
const toString = (v) => Object.prototype.toString.call(v)
const isFunction = (v) => typeof v === 'function'

export const isDefaultTag = (str) => tags.includes(str)

export const hasDefaultTag = (v) =>
  isFunction(v.toString) &&
  isDefaultTag(v.toString()) &&
  isDefaultTag(toString(v))
