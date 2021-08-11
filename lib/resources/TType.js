import { toString, TextUtils } from '../.internal/utils'
import { Report } from './Report'

import INIT from '../.internal/init'

function Builtin(name) {
  return INIT[name]
}

export class TType {
  constructor(props) {
    this.props = props
  }

  get name() {
    return TextUtils.toFirstUpper(this.type)
  }

  get type() {
    return String(this.props.type)
  }

  get tag() {
    return String(this.props.tag)
  }

  get isNotAvailable() {
    return this.isAvailable()
      ? false
      : `${this.name} is not available on this environment`
  }

  toString() {
    return this.tag
  }

  isConstructor() {
    try {
      new Builtin(this.type)
      return true
    } catch (e) {
      return false
    }
  }

  isFactory() {
    try {
      Builtin(this.type)
      return true
    } catch (e) {
      return false
    }
  }

  isStringifiable() {
    try {
      JSON.stringify(this.instance())
      return true
    } catch (e) {
      return false
    }
  }

  create(...args) {
    return this.instance(...args)
  }

  build(...args) {
    return this.instance(...args)
  }

  from(...args) {
    return this.instance(...args)
  }

  of(...args) {
    return this.instance(...args)
  }

  info(options) {
    if (!this.isAvailable()) return this.isNotAvailable

    return Report.instance(this.instance(), options)
  }

  // TODO: instance factory
  instance(...args) {
    if (!this.isAvailable()) return this.isNotAvailable
    if (this.isConstructor()) return new Builtin(this.type)(...args)
    if (this.isFactory()) return Builtin(this.type)(...args)
    return INIT[this.type]
  }
  // instance(...args) {
  //   if (!this.isAvailable()) return this.isNotAvailable

  //   return this.isConstructor()
  //     ? new Builtin(this.type)(...args)
  //     : Builtin(this.type)(...args)
  // }

  isAvailable() {
    return !!INIT[this.type]
  }

  ownKeys() {
    return Reflect.ownKeys(this.instance())
  }

  get [Symbol.toStringTag]() {
    return 'TType'
  }

  get [Symbol.species]() {
    return TType
  }

  *[Symbol.iterator]() {
    yield this.props.type
    yield this.props.tag
  }

  [Symbol.hasInstance](instance) {
    return toString(instance) === this.tag
  }

  static create(props) {
    return new TType(props)
  }
}
