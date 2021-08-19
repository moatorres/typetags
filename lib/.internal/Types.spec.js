import fs from 'fs'
import path from 'path'
import { Types } from './Types'

beforeEach(() => {
  jest.clearAllMocks()
})

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

  describe('.metadata()', () => {
    it('Should be defined', () => {
      expect(Types.metadata).toBeDefined()
    })

    it('Should return an object with metadata of all available types', () => {
      const meta = Types.metadata()
      expect(typeof meta).toEqual('object')

      const { Array: arraymeta } = meta
      expect(arraymeta).toBeDefined()
      expect(arraymeta.isGlobal).toBeDefined()
      expect(arraymeta.isAvailable).toBeDefined()
      expect(arraymeta.isConstructor).toBeDefined()
      expect(arraymeta.isFactory).toBeDefined()
      expect(arraymeta.isIterator).toBeDefined()
      expect(arraymeta.isNested).toBeDefined()
      expect(arraymeta.isPrimitive).toBeDefined()
      expect(arraymeta.isSyntatic).toBeDefined()
      expect(arraymeta.isStringifiable).toBeDefined()
    })

    it('Should refresh itself if receives "refresh: true" as an option', () => {
      const spy = jest.spyOn(fs, 'writeFileSync')

      Types.metadata()
      expect(spy).not.toHaveBeenCalled()

      Types.metadata({ refresh: true })
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('.tags()', () => {
    it('Should be defined', () => {
      expect(Types.tags).toBeDefined()
    })

    it('Should return an array of objects with type names and type tags', () => {
      const tags = Types.tags()
      expect(Array.isArray(tags)).toBeTrue()
    })

    it('Should refresh itself if receives "refresh: true" as an option', () => {
      const spy = jest.spyOn(fs, 'writeFileSync')

      Types.tags()
      expect(spy).not.toHaveBeenCalled()

      Types.tags({ refresh: true })
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('.get()', () => {
    it('Should be defined', () => {
      expect(Types.get).toBeDefined()
    })

    it('Should return the type, if available', () => {
      const array = Types.get('Array')
      expect(array).toBeDefined()
      const wind = Types.get('Window')
      expect(wind).toEqual('"Window" is not available')
    })
  })

  describe('.list()', () => {
    it('Should be defined', () => {
      expect(Types.list).toBeDefined()
    })

    // should return an object instead?
    it('Should return a list of all types', () => {
      const list = Types.list()
      expect(list).toBeDefined()
      expect(list.length).toBeGreaterThan(1)
    })
  })

  describe('.available()', () => {
    it('Should be defined', () => {
      expect(Types.available).toBeDefined()
    })

    // should return an object instead?
    it('Should return a list of all available types', () => {
      const available = Types.available()
      expect(available).toBeDefined()
      expect(available.length).toBeGreaterThan(1)
    })
  })

  describe('.unavailable()', () => {
    it('Should be defined', () => {
      expect(Types.unavailable).toBeDefined()
    })

    // should return an object instead?
    it('Should return a list of all unavailable types', () => {
      const unavailable = Types.unavailable()
      expect(unavailable).toBeDefined()
      expect(unavailable.length).toBeGreaterThan(1)
    })
  })

  describe('.report()', () => {
    it('Should be defined', () => {
      expect(Types.report).toBeDefined()
    })

    it('Should return an object with the amount of all, available, and unavailable types', () => {
      const { types, available, unavailable } = Types.report()
      expect(typeof types).toEqual('number')
      expect(typeof available).toEqual('number')
      expect(typeof unavailable).toEqual('number')
      expect(available + unavailable).toEqual(types)
    })
  })
})
