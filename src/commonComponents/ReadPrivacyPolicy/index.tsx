import { ROUTES } from 'braty-common'
import { BannerWithTitleAndLink } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'

const ReadPrivacyPolicy = () => {
  const commonT = useTranslation('COMMON').withBase('READ_PRIVACY_POLICY')

  return null

  return (
    <BannerWithTitleAndLink
      link={{
        to: ROUTES.DOCUMENTS,
        label: commonT('buttonLabel')
      }}
      title={commonT('title')}
    />
  )
}

export default ReadPrivacyPolicy
