import React from 'react'
import { Tile, Text, SectionHead, Flexbox } from 'components'
import { useTranslation } from 'hooks'
import StatusIndicator from './StatusIndicator'
import { Order } from 'braty-common'

type Props = {
  status: Order['status']
}

const Status = ({ status }: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const t = useTranslation('ORDER').withBase('SECTIONS.STATUS')

  return (
    <Tile>
      <SectionHead separator title={t('title')} />

      <Flexbox alignItems="center">
        <StatusIndicator status={status} />

        <Text marginLeft="m-size" type="caption">
          {commonT(`STATUS_MEANINGS.${status}`)}
        </Text>
      </Flexbox>
    </Tile>
  )
}

export default Status
