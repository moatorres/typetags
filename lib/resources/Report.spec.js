import { Report } from './Report'

describe('Report', () => {
  it('Should be defined', () => {
    expect(Report).toBeDefined()
  })

  describe('instance()', () => {
    it('Should be defined', () => {
      expect(Report.instance).toBeDefined()
    })
  })

  describe('builtin()', () => {
    it('Should be defined', () => {
      expect(Report.builtin).toBeDefined()
    })
  })

  describe('introspect()', () => {
    it('Should be defined', () => {
      expect(Report.introspect).toBeDefined()
    })
  })
})
