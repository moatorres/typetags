'use strict'

import { ALL_TYPES } from './constants'
import { TextUtils } from './resources/TextUtils'

export const getOwnKeys = Reflect.ownKeys
export const getProps = Object.getOwnPropertyNames
export const getKeys = Object.keys
export const getEntries = Object.entries
export const getDescriptors = Object.getOwnPropertyDescriptors
export const isArray = Array.isArray

export const toString = (v) => Object.prototype.toString.call(v)

export const hasOwn = (obj, prop) =>
  Object.prototype.hasOwnProperty.call(obj, prop)

export const comparer = (other) => (current) =>
  other.filter((name) => name === current).length === 0

export const define = (object, name, value) =>
  Object.defineProperty(object, name, {
    value: value,
    configurable: true,
    enumerable: false,
    writable: false,
  })

export const defineToString = (o) =>
  define(o, 'toString', Object.prototype.toString)

export const addTag = (o, tag) => define(o, Symbol.toStringTag, tag)

export const hasToString = (o) =>
  !!o.toString && typeof o.toString === 'function'

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

export const generateTypeTags = () => ALL_TYPES.map(metaSchema)
