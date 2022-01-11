import { ReactComponent as En } from 'assets/flags/en.svg'
import { ReactComponent as Pl } from 'assets/flags/pl.svg'
import { ROUTES } from 'braty-common'
import { Button, Flexbox } from 'components'
import { Language, language, useTranslation } from 'hooks'
import React from 'react'
import { useLocation } from 'react-router'

const LanguageToggle = () => {
  const { currentLanguage, i18n, withBase } = useTranslation('COMMON')
  const commonT = withBase('LANGUAGE_TOGGLE_LABEL')

  const { pathname } = useLocation()

  return (
    <Button
      disabled={basketDisabledpathnames.includes(pathname)}
      onClick={() => {
        const indexOfCurrentLanguage = language.options.indexOf(currentLanguage)
        const indexOfNextLanguage =
          indexOfCurrentLanguage === language.options.length - 1
            ? 0
            : indexOfCurrentLanguage + 1
        const nextLanguage = language.options[indexOfNextLanguage]

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
  ROUTES.CART as string,
  ROUTES.CHECKOUT_DETAILS as string,
  ROUTES.CHECKOUT_DELIVERY as string,
  ROUTES.CHECKOUT_PAYMENT as string,
  ROUTES.CHECKOUT_RESULT as string
]

const languageToFlagMapping: Record<Language, JSX.Element> = {
  pl: <Pl />,
  en: <En />
}

export default LanguageToggle
