import { TitleAndLinkBanner } from 'components'
import { DOCUMENTS } from 'constants/routes'
import React from 'react'
import { useTranslation } from 'hooks'

const ReadPrivacyPolicy = () => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <TitleAndLinkBanner
      link={{
        to: DOCUMENTS,
        label: commonT('readPrivacyPolicy.buttonLabel')
      }}
      title={commonT('readPrivacyPolicy.title')}
    />
  )
}

export default ReadPrivacyPolicy
