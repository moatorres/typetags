'use strict'

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
  toTag: (str) => String('[object ' + String(str) + ']'),
  toLower: (str) => String(str).toLowerCase(),
  toUpper: (str) => String(str).toUpperCase(),
  toFirstUpper: (str) => String(str)[0].toUpperCase() + String(str).substr(1),
  toFirstLower: (str) => String(str)[0].toLowerCase() + String(str).substr(1),
  toPredicate: (str) =>
    String('is' + String(str).split('.').join('').split(' ').join('')),
  toRemoveDot: (str) => String(str).split('.').join(' '),
}

export const getGlobalTypes = () => {
  let res = []
  for (let name in global) res.push([name, global[name]])
  return res
}

const getBrowser = () => {
  const { userAgent } = navigator
  let match =
    userAgent.match(
      /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
    ) || []
  let temp

  if (/trident/i.test(match[1])) {
    temp = /\brv[ :]+(\d+)/g.exec(userAgent) || []

    return `IE ${temp[1] || ''}`
  }

  if (match[1] === 'Chrome') {
    temp = userAgent.match(/\b(OPR|Edge)\/(\d+)/)

    if (temp !== null) return temp.slice(1).join(' ').replace('OPR', 'Opera')

    temp = userAgent.match(/\b(Edg)\/(\d+)/)

    if (temp !== null)
      return temp.slice(1).join(' ').replace('Edg', 'Edge (Chromium)')
  }

  match = match[2]
    ? [match[1], match[2]]
    : [navigator.appName, navigator.appVersion, '-?']
  temp = userAgent.match(/version\/(\d+)/i)

  if (temp !== null) {
    match.splice(1, 1, temp[1])
  }

  return match.join(' ')
}

export const checkRuntime = () => {
  if (typeof window !== 'undefined') return getBrowser()
  else return `Node ${process.version}`
}
