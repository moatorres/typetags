import { TypeTags } from '../resources/TypeTags'
import { toString } from '../utils'

let intl = Intl
let intlColl = new Intl.Collator()
let intlDate = new Intl.DateTimeFormat()
let intlList = new Intl.ListFormat()
let intlLocale = new Intl.Locale('en') // special args
let intlNum = new Intl.NumberFormat()
let intlPlural = new Intl.PluralRules()
let intlRelTime = new Intl.RelativeTimeFormat()

const ifGithub = !!process.env.__GITHUB__ ? describe.skip : describe

ifGithub('Intl', () => {
  it('Should be defined', () => {
    expect(Intl).toBeDefined()
    expect(TypeTags.Intl).toBeDefined()
  })

  it('Should match the type tag of an "Intl" data type', () => {
    const tag = TypeTags.get(intl)

    expect(intl).toEqual(Intl)
    expect(tag).toEqual(TypeTags.Intl)
    expect(toString(intl)).toEqual(TypeTags.Intl)
    expect(intl.toString()).toEqual(TypeTags.Intl) // default
  })

  it('Should NOT match the type tag of its methods', () => {
    const tag = TypeTags.get(intl.toFixed)
    expect(tag).not.toEqual(TypeTags.Intl)
    expect(intl.toString()).toEqual(TypeTags.Intl)
    expect(toString(intl.toExponential)).not.toEqual(TypeTags.Intl)
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isIntl).toBeDefined()
    expect(TypeTags.isIntl(intl)).toBeTrue()
    expect(TypeTags.isIntl(toString(intl))).toBeTrue()
    expect(TypeTags.isIntl(TypeTags.Intl)).toBeTrue()
  })
})

ifGithub('Intl.Collator', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.Collator']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.Collator" data type', () => {
    expect(TypeTags.get(intlColl)).toEqual(TypeTags['Intl.Collator'])
    expect(toString(intlColl)).toEqual(TypeTags['Intl.Collator'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isIntlCollator).toBeDefined()
    expect(TypeTags.isIntlCollator(intlColl)).toBeTrue()
    expect(TypeTags.isIntlCollator(toString(intlColl))).toBeTrue()
    expect(TypeTags.isIntlCollator(TypeTags['Intl.Collator'])).toBeTrue()
  })
})

ifGithub('Intl.DateTimeFormat', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.DateTimeFormat']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.DateTimeFormat" data type', () => {
    expect(TypeTags.get(intlDate)).toEqual(TypeTags['Intl.DateTimeFormat'])
    expect(toString(intlDate)).toEqual(TypeTags['Intl.DateTimeFormat'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isIntlDateTimeFormat).toBeDefined()
    expect(TypeTags.isIntlDateTimeFormat(intlDate)).toBeTrue()
    expect(TypeTags.isIntlDateTimeFormat(toString(intlDate))).toBeTrue()
    expect(
      TypeTags.isIntlDateTimeFormat(TypeTags['Intl.DateTimeFormat'])
    ).toBeTrue()
  })
})

ifGithub('Intl.ListFormat', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.ListFormat']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.ListFormat" data type', () => {
    expect(TypeTags.get(intlList)).toEqual(TypeTags['Intl.ListFormat'])
    expect(toString(intlList)).toEqual(TypeTags['Intl.ListFormat'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isIntlListFormat).toBeDefined()
    expect(TypeTags.isIntlListFormat(intlList)).toBeTrue()
    expect(TypeTags.isIntlListFormat(toString(intlList))).toBeTrue()
    expect(TypeTags.isIntlListFormat(TypeTags['Intl.ListFormat'])).toBeTrue()
  })
})

ifGithub('Intl.Locale', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.Locale']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.Locale" data type', () => {
    expect(TypeTags.get(intlLocale)).toEqual(TypeTags['Intl.Locale'])
    expect(toString(intlLocale)).toEqual(TypeTags['Intl.Locale'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isIntlLocale).toBeDefined()
    expect(TypeTags.isIntlLocale(intlLocale)).toBeTrue()
    expect(TypeTags.isIntlLocale(toString(intlLocale))).toBeTrue()
    expect(TypeTags.isIntlLocale(TypeTags['Intl.Locale'])).toBeTrue()
  })
})

ifGithub('Intl.NumberFormat', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.NumberFormat']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.NumberFormat" data type', () => {
    expect(TypeTags.get(intlNum)).toEqual(TypeTags['Intl.NumberFormat'])
    expect(toString(intlNum)).toEqual(TypeTags['Intl.NumberFormat'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isIntlNumberFormat).toBeDefined()
    expect(TypeTags.isIntlNumberFormat(intlNum)).toBeTrue()
    expect(TypeTags.isIntlNumberFormat(toString(intlNum))).toBeTrue()
    expect(
      TypeTags.isIntlNumberFormat(TypeTags['Intl.NumberFormat'])
    ).toBeTrue()
  })
})

ifGithub('Intl.PluralRules', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.PluralRules']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.PluralRules" data type', () => {
    expect(TypeTags.get(intlPlural)).toEqual(TypeTags['Intl.PluralRules'])
    expect(toString(intlPlural)).toEqual(TypeTags['Intl.PluralRules'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isIntlPluralRules).toBeDefined()
    expect(TypeTags.isIntlPluralRules(intlPlural)).toBeTrue()
    expect(TypeTags.isIntlPluralRules(toString(intlPlural))).toBeTrue()
    expect(TypeTags.isIntlPluralRules(TypeTags['Intl.PluralRules'])).toBeTrue()
  })
})

ifGithub('Intl.RelativeTimeFormat', () => {
  it('Should be defined', () => {
    expect(TypeTags['Intl.RelativeTimeFormat']).toBeDefined()
  })

  it('Should match the type tag of an "Intl.RelativeTimeFormat" data type', () => {
    expect(TypeTags.get(intlRelTime)).toEqual(
      TypeTags['Intl.RelativeTimeFormat']
    )
    expect(toString(intlRelTime)).toEqual(TypeTags['Intl.RelativeTimeFormat'])
  })

  it('Should have a predicate', () => {
    expect(TypeTags.isIntlRelativeTimeFormat).toBeDefined()
    expect(TypeTags.isIntlRelativeTimeFormat(intlRelTime)).toBeTrue()
    expect(TypeTags.isIntlRelativeTimeFormat(toString(intlRelTime))).toBeTrue()
    expect(
      TypeTags.isIntlRelativeTimeFormat(TypeTags['Intl.RelativeTimeFormat'])
    ).toBeTrue()
  })
})
