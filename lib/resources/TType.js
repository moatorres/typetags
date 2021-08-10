const { toString, TextUtils } = require('../.internal/utils')
const { Report } = require('./Report')

const TYPE_INITIALIZERS = require('../.internal/init')
const META = require('../.internal/data/typetags.json')

function Builtin(name) {
  return TYPE_INITIALIZERS[name]
}

class TType {
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

  isConstructor() {
    return this.props.constructor
  }

  create(...args) {
    return this.instance(...args)
  }

  new(...args) {
    return this.instance(...args)
  }

  build(...args) {
    return this.instance(...args)
  }

  is(v) {
    if (!this.isAvailable()) return this.isNotAvailable
    return v === this.tag || toString(v) === this.tag
  }

  toString() {
    return String(this.props.tag)
  }

  report(options) {
    if (!this.isAvailable()) return this.isNotAvailable

    return Report.instance(this.instance(), options)
  }

  info(options) {
    return this.report(options)
  }

  // TODO: instance factory
  instance(...args) {
    if (!this.isAvailable()) return this.isNotAvailable

    // TODO: return message on how-to instantiate if args malformed
    return this.isConstructor()
      ? new Builtin(this.type)(...args)
      : Builtin(this.type)(...args)

    // return this.props.constructor && this.props.instantiable
    //   ? new Builtin(this.props.type)(...args)
    //   : this.props.method
    //   ? Builtin(this.props.type)[this.props.method](...args) // use method
    //   : Builtin(this.props.type)(...args)
  }

  isAvailable() {
    let name = this.name.includes('Iterator')
      ? this.name.split(' ').join('.') // "Map.Iterator"
      : this.name
    return !!(TYPE_INITIALIZERS[this.type] || TYPE_INITIALIZERS[name])
  }

  ownKeys() {
    return Reflect.ownKeys(this.instance())
  }

  get [Symbol.toStringTag]() {
    return this.name
  }

  get [Symbol.species]() {
    return TType
  }

  *[Symbol.iterator]() {
    yield this.props.type
    yield this.props.tag
  }

  static [Symbol.hasInstance](instance) {
    return toString(instance) === this.props.tag
  }

  static create(props) {
    return new TType(props)
  }
}

module.exports = { TType }
