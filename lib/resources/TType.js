'use strict'

import { toString, TextUtils } from '../.internal/utils'
import { Report } from './Report'
import { Types } from './Types'

const instances = Types.initializers()

function Builtin(name) {
  return instances[name]
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

  info(options) {
    if (!this.isAvailable()) return
    return Report.instance(this.instance(), options)
  }

  // TODO: instance factory
  instance(...args) {
    if (!this.isAvailable()) return
    if (this.isConstructor()) return new Builtin(this.type)(...args)
    if (this.isFactory()) return Builtin(this.type)(...args)
    return instances[this.type]
  }

  isAvailable() {
    return !!instances[this.type]
    // if (!!instances[this.type]) return true
    // else throw `${this.name} is not available`
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
