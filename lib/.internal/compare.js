import { TypeTags } from '../type-tags'
import { Types } from './init'
import { comparer, memoize } from '../typetag/utils'

export const tags = Object.keys(TypeTags)
export const types = Object.keys(Types)

export const missing = tags.filter(comparer(types))
export const available = memoize(() => {
  let res = []
  for (let type in Types) if (!!Types[type]) res.push(type)
  return res
})()
export const unavailable = tags.filter(comparer(available))
