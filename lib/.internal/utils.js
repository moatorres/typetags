export const toString = (v) => Object.prototype.toString.call(v)

export const hasOwn = (obj, prop) =>
  Object.prototype.hasOwnProperty.call(obj, prop)

export const comparer = (other) => (current) =>
  other.filter((name) => name === current).length === 0

export const memoize = (fn) => {
  let cache = {}
  return (...args) => {
    let n = args[0]
    if (n in cache) return cache[n]
    else {
      let result = fn(n)
      cache[n] = result
      return result
    }
  }
}

export const define = (object, name, value) =>
  Object.defineProperty(object, name, {
    value: value,
    configurable: true,
    enumerable: false,
    writable: false,
  })

export const TextUtils = {
  toTag: (name) => '[object ' + name + ']',
  toLower: (str) => str.toLowerCase(),
  toUpper: (str) => str.toUpperCase(),
  toFirstUpper: (name) => name[0].toUpperCase() + name.substr(1),
  toFirstLower: (str) => str.charAt(0).toLowerCase() + str.substr(1),
  toPredicate: (name) => 'is' + name.split('.').join(''),
  toRemoveDot: (str) => str.split('.').join(' '),
}

export const getGlobalTypes = () => {
  let res = []
  for (let name in global) res.push([name, global[name]])
  return res
}
