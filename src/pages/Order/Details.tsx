import { DisplayDate, LabelledItem, SectionHead, Tile } from 'components'
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
    <Tile>
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

      <LabelledItem
        item={productCount}
        label={t('LABELS.product_count')}
        marginTop="m-size"
      />
    </Tile>
  )
}

export default Details
