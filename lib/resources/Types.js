// import { TType } from './TType'
import fs from 'fs'
import path from 'path'
import { checkRuntime } from '../.internal/utils'

import { generateInitFile } from '../.internal/generate-initializer'
// import { getMeta } from '../.internal/generate-metadata'
// import { getTags } from '../.internal/generate-typetags'

// import INIT from '../.internal/init'
// import META from '../.internal/data/typetags.json'

const INIT_PATH = path.resolve(__dirname, '../.internal/init/index.js')
const instances = require(INIT_PATH)

export class Types {
  constructor() {
    if (Types.instance) return Types.instance
    Types.instance = this
  }

  static init() {
    const fileData = generateInitFile()

    fs.writeFileSync(INIT_PATH, fileData)
    return void 0
  }

  static initializers() {
    !fs.existsSync(INIT_PATH) && this.init()
    return require(INIT_PATH)
  }

  // static generate() {
  //   return META.map(TType.create) // generate meta?
  // }

  // static toTType() {
  //   return META.map(TType.create)
  // }

  // should be all instances?
  static list() {
    return Object.entries(instances).filter(([type, value]) => !!value)
  }

  static missing() {
    return Object.entries(instances).filter(([type, value]) => !value)
  }

  // should be the available instances?
  static available() {
    return this.list().length
  }

  // should be the unavailable instances?
  static unavailable() {
    return this.missing().length
  }

  static all() {
    return Object.entries(instances)
  }

  static get(type) {
    return instances[type] || `"${type}" is not available`
  }

  static count() {
    // use builder pattern?
    return this.available()
  }

  static runtime() {
    // move to TypeTags object or remove it all?
    return checkRuntime()
  }
}
