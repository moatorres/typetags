import { toString } from '../.internal/utils'
import { Types } from './Types'

const TAGS = Types.tags()

export class TTag {
  static get(type) {
    return this.of(type)
  }

  // add "of(...args)" for multiple checking?
  static of(v) {
    let isString = typeof v === 'string'
    let types = TAGS.map((meta) => meta.type.toLowerCase())
    let found = TAGS.filter((meta) => {
      let found = meta.type.toLowerCase() === String(v).toLowerCase()
      return found ? meta.tag : undefined
    })

    let exists = isString && types.includes(v.toLowerCase()) && found.length > 0
    let result = exists ? found[0].tag : undefined

    return isString && result ? result : toString(v)
  }
}
