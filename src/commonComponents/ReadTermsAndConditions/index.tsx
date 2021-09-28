import { TitleAndLinkBanner } from 'components'
import { DOCUMENTS } from 'constants/routes'
import React from 'react'
import { useTranslation } from 'hooks'

const ReadTermsAndConditions = () => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <TitleAndLinkBanner
      link={{
        to: DOCUMENTS,
        label: commonT('readTermAndConditions.buttonLabel')
      }}
      title={commonT('readTermAndConditions.title')}
    />
  )
}

export default ReadTermsAndConditions
