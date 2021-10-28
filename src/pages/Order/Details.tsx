import { DisplayDate, LabelledItem, SectionHead, Tile } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'
import { formatDate } from 'utils'

type Props = Pick<GetOrderResponse, 'created_at' | 'updated_at'>

const Details = ({ created_at, updated_at }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.DETAILS')

  return (
    <Tile marginBottom="m-size">
      <SectionHead separator title={t('title')} />

      {created_at !== updated_at && (
        <LabelledItem
          item={<DisplayDate>{updated_at}</DisplayDate>}
          label={t('LABELS.updated_at')}
          marginBottom="m-size"
        />
      )}

      <LabelledItem
        item={formatDate(created_at)}
        label={t('LABELS.created_at')}
      />
    </Tile>
  )
}

export default Details
