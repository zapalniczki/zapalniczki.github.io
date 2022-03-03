import { Button, LabelledItem, SectionHead, Tile } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'

type Props = Pick<GetOrderResponse, 'parcel'>

const ParcelDetails = ({ parcel }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.PARCEL_DETAILS')

  const hasRef = !!parcel?.ref
  const hasLink = !!parcel?.link

  if (!hasLink && !hasRef) {
    return null
  }

  return (
    <Tile>
      <SectionHead separator title={t('title')} />

      <LabelledItem item={parcel?.ref} label={t('LABELS.parcel_id')} />

      {hasLink && (
        <Button
          label={t('LABELS.follow_parcel')}
          marginTop={hasRef ? 'm-size' : 0}
          onClick={() => window.open(parcel.link, '_blank')}
          size="small"
          width="max-content"
        />
      )}
    </Tile>
  )
}

export default ParcelDetails
