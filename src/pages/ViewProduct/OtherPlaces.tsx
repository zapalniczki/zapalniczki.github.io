import { Product, useGetOtherPlaces } from 'api'
import { ProductsGrid } from 'commonComponents'
import React from 'react'
import { useTranslation } from 'hooks'

type Props = {
  labelId: Product['label_id']
  collectionId: Product['collection_id']
}

const OtherPlaces = ({ collectionId, labelId }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')

  const productsQuery = useGetOtherPlaces({ labelId, collectionId })

  return (
    <ProductsGrid
      link={{
        to: {
          pathname: '/products',
          state: {
            collectionId
          }
        },
        label: t('otherIcons.linkLabel')
      }}
      marginTop="xxl-size"
      query={productsQuery}
      title={t('otherPlaces.title')}
    />
  )
}

export default OtherPlaces
