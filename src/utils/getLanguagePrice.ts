import { Language } from 'braty-common'

type Props = {
  language: Language
  price: Price
}

function getLanguagePrice(props: Props) {
  const key = `price_${props.language}` as const

  return props.price[key]
}

type Price = {
  price_en: string
  price_pl: string
}

export default getLanguagePrice
