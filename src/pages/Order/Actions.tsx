import { SectionHead, Text, Tile } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'

const Actions = () => {
  const t = useTranslation('ORDER').withBase('SECTIONS.ACTIONS')

  return (
    <Tile>
      <SectionHead separator title={t('title')} />

      <Text type="caption">{t('emptyState')}</Text>
    </Tile>
  )
}

export default Actions
