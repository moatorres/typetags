const { toString } = require('../.internal/utils')
const META = require('../.internal/data/typetags.json')

class TTag {
  static get(type) {
    return this.of(type)
  }

  // add "of(...args)" for multiple checking?
  static of(v) {
    let isString = typeof v === 'string'
    let types = META.map((meta) => meta.type.toLowerCase())
    let found = META.filter((meta) => {
      let found = meta.type.toLowerCase() === String(v).toLowerCase()
      return found ? meta.tag : undefined
    })

    let exists = isString && types.includes(v.toLowerCase()) && found.length > 0
    let result = exists ? found[0].tag : undefined

    return isString && result ? result : toString(v)
  }
}

module.exports = { TTag }
