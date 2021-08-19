import {
  getType,
  argsFor,
  argsMap,
  TypedArrayRegex,
  TypedArrayTagRegex,
  withProperties,
  withSymbols,
  withToString,
} from './TTypeUtils'

describe('TTypeUtils', () => {
  describe('getType()', () => {
    it('Should be defined', () => {
      expect(getType).toBeDefined()
    })
  })

  describe('argsFor()', () => {
    it('Should be defined', () => {
      expect(argsFor).toBeDefined()
    })
  })

  describe('argsMap()', () => {
    it('Should be defined', () => {
      expect(argsMap).toBeDefined()
    })
  })

  describe('TypedArrayRegex()', () => {
    it('Should be defined', () => {
      expect(TypedArrayRegex).toBeDefined()
    })
  })

  describe('TypedArrayTagRegex()', () => {
    it('Should be defined', () => {
      expect(TypedArrayTagRegex).toBeDefined()
    })
  })

  describe('withProperties()', () => {
    it('Should be defined', () => {
      expect(withProperties).toBeDefined()
    })
  })

  describe('withSymbols()', () => {
    it('Should be defined', () => {
      expect(withSymbols).toBeDefined()
    })
  })

  describe('withToString()', () => {
    it('Should be defined', () => {
      expect(withToString).toBeDefined()
    })
  })
})
