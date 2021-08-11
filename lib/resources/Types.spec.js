import fs from 'fs'
import path from 'path'
import { Types } from './Types'

describe('Types', () => {
  it('Should be defined', () => {
    expect(Types).toBeDefined()
  })

  describe('.init()', () => {
    beforeAll(() => {
      const PATH = path.resolve(__dirname, '../.internal/init/index.js')
      const exists = fs.existsSync(PATH)
      const shouldUnlink = () => exists && fs.unlinkSync(PATH)

      shouldUnlink()
    })

    it('Should be defined', () => {
      expect(Types.init).toBeDefined()
    })

    it('Should create a new "./internal/init/index.js" file', () => {
      const PATH = path.resolve(__dirname, '../.internal/init/index.js')

      const exists = fs.existsSync(PATH)
      expect(exists).toBeFalse() // ensure there's no file

      if (!exists) return Types.init() // then generate
      expect(exists).toBeTrue()

      const file = fs.readFileSync(PATH) // check that's there
      expect(file).toBeDefined()
    })
  })

  describe('.initializers()', () => {
    it('Should be defined', () => {
      expect(Types.initializers).toBeDefined()
    })

    it('Should return an object with types initialized', () => {
      const inits = Types.initializers()
      const names = Object.getOwnPropertyNames(inits)

      expect(typeof inits).toEqual('object')
      expect(names.length).toBeGreaterThan(1)
    })
  })

  describe('.list()', () => {
    it('Should be defined', () => {
      expect(Types.list).toBeDefined()
    })

    // should return an object instead?
    it('Should return a list of all types and instances', () => {
      const list = Types.list()
      expect(list).toBeDefined()
      expect(list.length).toBeGreaterThan(1)
    })
  })

  describe('.missing()', () => {
    it('Should be defined', () => {
      expect(Types.missing).toBeDefined()
    })

    // should return an object instead?
    it('Should return a list of all missing types', () => {
      const missing = Types.missing()
      expect(missing).toBeDefined()
      expect(missing.length).toBeGreaterThan(1)
    })
  })

  describe('.available()', () => {
    it('Should be defined', () => {
      expect(Types.available).toBeDefined()
    })

    // should be "countAvailable" or "available().count()" instead?
    it('Should return the amount of available types', () => {
      const available = Types.available()
      expect(available).toBeDefined()
      expect(typeof available).toEqual('number')
    })
  })

  describe('.unavailable()', () => {
    it('Should be defined', () => {
      expect(Types.unavailable).toBeDefined()
    })

    // should be "countAvailable" or "unavailable().count()" instead?
    it('Should return the amount of unavailable types', () => {
      const unavailable = Types.unavailable()
      expect(unavailable).toBeDefined()
      expect(typeof unavailable).toEqual('number')
    })
  })

  describe('.all()', () => {
    it('Should be defined', () => {
      expect(Types.all).toBeDefined()
    })

    // should return an object instead?
    it('Should return a list of all types', () => {
      const all = Types.all()
      expect(all).toBeDefined()
      expect(all.length).toBeGreaterThan(1)
    })
  })

  describe('.get()', () => {
    it('Should be defined', () => {
      expect(Types.get).toBeDefined()
    })

    // TODO: add list of type names d.ts
    it('Should return the type, if available', () => {
      const array = Types.get('Array') // add list of type names d.ts
      expect(array).toBeDefined()
      const wind = Types.get('Window')
      expect(wind).toEqual('"Window" is not available')
    })
  })

  describe('.count()', () => {
    it('Should be defined', () => {
      expect(Types.count).toBeDefined()
    })

    // should be "countAvailable" or "available().count()" instead?
    it('Should return the amount of all available types', () => {
      const count = Types.count()
      expect(count).toBeDefined()
      expect(typeof count).toEqual('number')
    })
  })
})
