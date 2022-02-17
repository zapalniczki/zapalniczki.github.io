import { Language } from 'braty-common'

const displayMoney = (
  n: number,
  negative?: boolean,
  language: Language = 'pl'
) => {
  const currency = languageToCurrency[language]
  const locale = languageToLocale[language]

  const format = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  })

  if (negative) {
    return `-${format.format(n)}`
  }

  return format.format(n)
}

const languageToCurrency: Record<Language, string> = {
  en: 'EUR',
  pl: 'PLN'
}

const languageToLocale: Record<Language, string> = {
  en: 'de-DE',
  pl: 'pl-PL'
}

export default displayMoney
