'use strict'

import fs from 'fs'
import path from 'path'

import { checkRuntime } from '../.internal/utils'
import { generateInitFile } from '../.internal/generate-initializer'
import { generateMetadata } from '../.internal/generate-metadata'
import { generateTypetags } from '../.internal/generate-typetags'

const INIT_PATH = path.resolve(__dirname, '../.internal/init/index.js')
const META_PATH = path.resolve(__dirname, '../.internal/data/metadata.json')
const TAGS_PATH = path.resolve(__dirname, '../.internal/data/typetags.json')

const instances = require(INIT_PATH)

export class Types {
  constructor() {
    if (Types.instance) return Types.instance
    Types.instance = this
  }

  static init() {
    !fs.existsSync(TAGS_PATH) && this.tags({ refresh: true })
    const fileData = generateInitFile()
    fs.writeFileSync(INIT_PATH, fileData)
    return void 0
  }

  static initializers() {
    !fs.existsSync(INIT_PATH) && this.init()
    return require(INIT_PATH)
  }

  static metadata(options) {
    const metadata = generateMetadata()
    options?.refresh && fs.writeFileSync(META_PATH, JSON.stringify(metadata))
    return metadata
  }

  static tags(options) {
    !fs.existsSync(INIT_PATH) && this.init()
    const typetags = generateTypetags()
    options?.refresh && fs.writeFileSync(TAGS_PATH, JSON.stringify(typetags))
    return typetags
  }

  // static toTType() {
  //   return META.map(TType.create)
  // }

  static get(type) {
    return instances[type] || `"${type}" is not available`
  }

  static list() {
    return Object.entries(instances)
  }

  static available() {
    return Object.entries(instances).filter(([type, value]) => !!value)
  }

  static unavailable() {
    return Object.entries(instances).filter(([type, value]) => !value)
  }

  static report() {
    return {
      types: this.list().length,
      available: this.available().length,
      unavailable: this.unavailable().length,
    }
  }

  static runtime() {
    // move to TypeTags object or remove it all?
    return checkRuntime()
  }
}
