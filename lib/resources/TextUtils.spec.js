import { TextUtils } from './TextUtils'

describe('TextUtils', () => {
  it('Should be defined', () => {
    expect(TextUtils).toBeDefined()
  })

  describe('.toTag', () => {
    it('Should be defined', () => {
      expect(TextUtils.toTag).toBeDefined()
    })

    it('Should allow us to convert a string to a type tag format', () => {
      let res = TextUtils.toTag('Uber')
      expect(typeof res).toEqual('string')
      expect(res).toEqual('[object Uber]')
    })
  })

  describe('.toLower', () => {
    it('Should be defined', () => {
      expect(TextUtils.toLower).toBeDefined()
    })

    it('Should lower-case characters of a string', () => {
      let res = TextUtils.toLower('TypeTags')
      expect(typeof res).toEqual('string')
      expect(res).toEqual('typetags')
    })
  })

  describe('.toUpper', () => {
    it('Should be defined', () => {
      expect(TextUtils.toUpper).toBeDefined()
    })

    it('Should upper-case characters of a string', () => {
      let res = TextUtils.toUpper('TypeTags')
      expect(typeof res).toEqual('string')
      expect(res).toEqual('TYPETAGS')
    })
  })

  describe('.toFirstUpper', () => {
    it('Should be defined', () => {
      expect(TextUtils.toFirstUpper).toBeDefined()
    })

    it('Should upper-case the first character of a string', () => {
      let res = TextUtils.toFirstUpper('typetags')
      expect(typeof res).toEqual('string')
      expect(res).toEqual('Typetags')
    })
  })

  describe('.toFirstLower', () => {
    it('Should be defined', () => {
      expect(TextUtils.toFirstLower).toBeDefined()
    })

    it('Should lower-case the first character of a string', () => {
      let res = TextUtils.toFirstLower('TypeTags')
      expect(typeof res).toEqual('string')
      expect(res).toEqual('typeTags')
    })
  })

  describe('.toPredicate', () => {
    it('Should be defined', () => {
      expect(TextUtils.toPredicate).toBeDefined()
    })

    it('Should convert a string to a "is<type>" format', () => {
      let res = TextUtils.toPredicate('Array')
      expect(typeof res).toEqual('string')
      expect(res).toEqual('isArray')
    })
  })

  describe('.toRemoveDot', () => {
    it('Should be defined', () => {
      expect(TextUtils.toRemoveDot).toBeDefined()
    })

    it('Should convert dots "." of a string to empty " " spaces', () => {
      let res = TextUtils.toRemoveDot('TypeTags.Array')
      expect(typeof res).toEqual('string')
      expect(res).toEqual('TypeTags Array')
    })
  })
})
