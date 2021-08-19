import { toString } from './utils'

const getTag = (value) => {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }

  return toString(value)
}

export default getTag
