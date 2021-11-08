import { BannerWithTitleAndLink } from 'components'
import { DOCUMENTS } from 'constants/routes'
import React from 'react'
import { useTranslation } from 'hooks'

const ReadPrivacyPolicy = () => {
  const commonT = useTranslation('COMMON').withBase('READ_PRIVACY_POLICY')

  return (
    <BannerWithTitleAndLink
      link={{
        to: DOCUMENTS,
        label: commonT('buttonLabel')
      }}
      title={commonT('title')}
    />
  )
}

export default ReadPrivacyPolicy
