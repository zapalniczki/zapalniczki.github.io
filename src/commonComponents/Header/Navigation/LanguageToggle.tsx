import { Button, Flexbox } from 'components'
import {
  CART,
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PAYMENT,
  CHECKOUT_RESULT
} from 'constants/routes'
import { useTranslation } from 'hooks'
import React from 'react'
import { enum as zenum, TypeOf } from 'zod'

import { ReactComponent as Pl } from 'assets/flags/pl.svg'
import { ReactComponent as En } from 'assets/flags/en.svg'
import { useLocation } from 'react-router'

const LanguageToggle = () => {
  const { currentLanguage, i18n, withBase } = useTranslation('COMMON')
  const commonT = withBase('LANGUAGE_TOGGLE_LABEL')

  const { pathname } = useLocation()

  return (
    <Button
      disabled={basketDisabledpathnames.includes(pathname)}
      onClick={() => {
        const indexOfCurrentLanguage =
          AVAILABLE_LANGUAGES.indexOf(currentLanguage)
        const indexOfNextLanguage =
          indexOfCurrentLanguage === AVAILABLE_LANGUAGES.length - 1
            ? 0
            : indexOfCurrentLanguage + 1
        const nextLanguage = AVAILABLE_LANGUAGES[indexOfNextLanguage]

        i18n.changeLanguage(nextLanguage)
      }}
      padding="s-size"
      title={commonT(currentLanguage)}
      type="button"
      variant="quaternary"
    >
      <Flexbox alignItems="center" height="2.5rem" width="2.5rem">
        {languageToFlagMapping[currentLanguage]}
      </Flexbox>
    </Button>
  )
}

const basketDisabledpathnames = [
  CART,
  CHECKOUT_DETAILS,
  CHECKOUT_DELIVERY,
  CHECKOUT_PAYMENT,
  CHECKOUT_RESULT
]

const AVAILABLE_LANGUAGES = ['pl', 'en'] as const
const availiableLanguages = zenum(['pl', 'en'])

export type Language = TypeOf<typeof availiableLanguages>

const languageToFlagMapping: Record<Language, JSX.Element> = {
  pl: <Pl />,
  en: <En />
}

export default LanguageToggle
