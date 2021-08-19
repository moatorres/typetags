'use strict'

import fs from 'fs'
import path from 'path'

import { generateInitFile } from './generate-initializer'
import { generateMetadata } from './generate-metadata'
import { generateTypetags } from './generate-typetags'

const INIT_PATH = path.resolve(__dirname, './init/index.js')
const META_PATH = path.resolve(__dirname, './data/metadata.json')
const TAGS_PATH = path.resolve(__dirname, './data/typetags.json')

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
}
