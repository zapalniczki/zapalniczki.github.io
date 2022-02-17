import { ReactComponent as En } from 'assets/flags/en.svg'
import { ReactComponent as Pl } from 'assets/flags/pl.svg'
import { Button, Flexbox } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'
import { language, Language } from 'braty-common'

const LanguageToggle = () => {
  const { currentLanguage, i18n, withBase } = useTranslation('COMMON')
  const commonT = withBase('LANGUAGE_TOGGLE_LABEL')

  return (
    <Button
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

const languageToFlagMapping: Record<Language, JSX.Element> = {
  pl: <Pl />,
  en: <En />
}

export default LanguageToggle
