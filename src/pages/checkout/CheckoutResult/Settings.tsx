import { SectionHead, Tile } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'

const Settings = () => {
  const t = useTranslation('CHECKOUT_RESULT').withBase('SETTINGS')

  return (
    <Tile>
      <SectionHead separator title={t('title')} />
    </Tile>
  )
}

export default Settings
