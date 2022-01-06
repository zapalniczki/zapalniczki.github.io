import { BannerWithTitleAndLink } from 'components'
import { DOCUMENTS } from 'constants/routes'
import React from 'react'
import { useTranslation } from 'hooks'

const ReadTermsAndConditions = () => {
  const commonT = useTranslation('COMMON').withBase('READ_TERMS_AND_CONDITIONS')

  return null

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

export default ReadTermsAndConditions
