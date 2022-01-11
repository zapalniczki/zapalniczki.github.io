import { ROUTES } from 'braty-common'
import { BannerWithTitleAndLink } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'

const ReadTermsAndConditions = () => {
  const commonT = useTranslation('COMMON').withBase('READ_TERMS_AND_CONDITIONS')

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

export default ReadTermsAndConditions
