import getTag from '../get-tag'
import { TypeTags } from '../resources/TypeTags'
import { toString } from '../.internal/utils'

let intl = Intl
let intlColl = new Intl.Collator()
let intlDate = new Intl.DateTimeFormat()
let intlList = new Intl.ListFormat()
let intlLocale = new Intl.Locale('en') // special args
let intlNum = new Intl.NumberFormat()
let intlPlural = new Intl.PluralRules()
let intlRelTime = new Intl.RelativeTimeFormat()

describe('Intl', () => {
  it('Should be defined', () => {
    expect(Intl).toBeDefined()
    expect(TypeTags.Intl).toBeDefined()
  })

  it('Should match the type tag of an "Intl" data type', () => {
    const tag = getTag(intl)

    expect(intl).toEqual(Intl)
    expect(tag).toEqual(TypeTags.Intl)
    expect(toString(intl)).toEqual(TypeTags.Intl)
    expect(intl.toString()).toEqual(TypeTags.Intl) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = getTag(intl.toFixed)
    expect(tag).not.toEqual(TypeTags.Intl)
    expect(intl.toString()).toEqual(TypeTags.Intl)
    expect(toString(intl.toExponential)).not.toEqual(TypeTags.Intl)
  })
})

describe('Intl.Collator', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.Collator']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.Collator" data type', () => {
    expect(getTag(intlColl)).toEqual(TypeTags['Intl.Collator'])
    expect(toString(intlColl)).toEqual(TypeTags['Intl.Collator'])
  })
})

describe('Intl.DateTimeFormat', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.DateTimeFormat']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.DateTimeFormat" data type', () => {
    expect(getTag(intlDate)).toEqual(TypeTags['Intl.DateTimeFormat'])
    expect(toString(intlDate)).toEqual(TypeTags['Intl.DateTimeFormat'])
  })
})

describe('Intl.ListFormat', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.ListFormat']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.ListFormat" data type', () => {
    expect(getTag(intlList)).toEqual(TypeTags['Intl.ListFormat'])
    expect(toString(intlList)).toEqual(TypeTags['Intl.ListFormat'])
  })
})

describe('Intl.Locale', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.Locale']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.Locale" data type', () => {
    expect(getTag(intlLocale)).toEqual(TypeTags['Intl.Locale'])
    expect(toString(intlLocale)).toEqual(TypeTags['Intl.Locale'])
  })
})

describe('Intl.NumberFormat', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.NumberFormat']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.NumberFormat" data type', () => {
    expect(getTag(intlNum)).toEqual(TypeTags['Intl.NumberFormat'])
    expect(toString(intlNum)).toEqual(TypeTags['Intl.NumberFormat'])
  })
})

describe('Intl.PluralRules', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.PluralRules']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.PluralRules" data type', () => {
    expect(getTag(intlPlural)).toEqual(TypeTags['Intl.PluralRules'])
    expect(toString(intlPlural)).toEqual(TypeTags['Intl.PluralRules'])
  })
})

describe('Intl.RelativeTimeFormat', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.RelativeTimeFormat']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.RelativeTimeFormat" data type', () => {
    expect(getTag(intlRelTime)).toEqual(TypeTags['Intl.RelativeTimeFormat'])
    expect(toString(intlRelTime)).toEqual(TypeTags['Intl.RelativeTimeFormat'])
  })
})
