import { ReactComponent as En } from 'assets/flags/en.svg'
import { ReactComponent as Pl } from 'assets/flags/pl.svg'
import { Button } from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

import { scrollToTop, useTranslation } from 'hooks'
import React from 'react'
import { language as languageSchema, Language } from 'braty-common'

const LanguageToggle = () => {
  const { i18n, language, withBase } = useTranslation('COMMON')
  const commonT = withBase('LANGUAGE_TOGGLE_LABEL')

  return (
    <Button
      onClick={() => {
        const indexOfCurrentLanguage = languageSchema.options.indexOf(language)
        const indexOfNextLanguage =
          indexOfCurrentLanguage === languageSchema.options.length - 1
            ? 0
            : indexOfCurrentLanguage + 1
        const nextLanguage = languageSchema.options[indexOfNextLanguage]

        i18n.changeLanguage(nextLanguage)

        scrollToTop()
      }}
      padding="s-size"
      title={commonT(language)}
      type="button"
      variant="quaternary"
    >
      <Flexbox alignItems="center" height="2.5rem" width="2.5rem">
        {languageToFlagMapping[language]}
      </Flexbox>
    </Button>
  )
}

const languageToFlagMapping: Record<Language, JSX.Element> = {
  pl: <Pl />,
  en: <En />
}

export default LanguageToggle
