import { Box, Button, LabelledItem, SectionHead, Tile } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'

type Props = Pick<GetOrderResponse, 'parcel'>

const ParcelDetails = ({ parcel }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.PARCEL_DETAILS')

  if (!parcel) {
    return null
  }

  return (
    <Tile>
      <SectionHead separator title={t('title')} />

      <LabelledItem item={parcel.ref} label={t('LABELS.parcel_id')} />

      <Box>
        <Button
          label={t('LABELS.follow_parcel')}
          marginTop="m-size"
          onClick={() => window.open(parcel.link, '_blank')}
          size="medium"
        />
      </Box>
    </Tile>
  )
}

export default ParcelDetails
