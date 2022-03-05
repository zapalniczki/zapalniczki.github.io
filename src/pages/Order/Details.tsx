import {
  DisplayDate,
  LabelledItem,
  SectionHead,
  Tile,
  TileBody,
  TileHeading
} from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { formatDate } from 'utils'

type Props = Pick<GetOrderResponse, 'created_at' | 'updated_at' | 'products'>

const Details = ({ created_at, products, updated_at }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.DETAILS')
  const { orderDetails } = useContext(remoteConfigContext)

  if (!orderDetails) {
    return null
  }

  const productCount = products
    .map((product) => product.quantity)
    .reduce((prev, curr) => prev + curr, 0)

  return (
    <Tile padding={[0, 0, 0, 0]}>
      <TileHeading>
        <SectionHead marginBottom={0} title={t('title')} />
      </TileHeading>

      <TileBody>
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

        <LabelledItem
          item={productCount}
          label={t('LABELS.product_count')}
          marginTop="m-size"
        />
      </TileBody>
    </Tile>
  )
}

export default Details
