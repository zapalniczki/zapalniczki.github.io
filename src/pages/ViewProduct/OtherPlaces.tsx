import { Product, useGetOtherPlaces } from 'api'
import { ProductsGrid } from 'commonComponents'
import React from 'react'
import { useTranslation } from 'hooks'

type Props = {
  labelId: Product['label_id']
  collectionId: Product['collection_id']
}

const OtherPlaces = ({ labelId, collectionId }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')

  const productsQuery = useGetOtherPlaces({ labelId, collectionId })

  return (
    <ProductsGrid
      marginTop="xxl-size"
      title={t('otherPlaces.title')}
      query={productsQuery}
      link={{
        to: {
          pathname: '/products',
          state: {
            collectionId
          }
        },
        label: t('otherIcons.linkLabel')
      }}
    />
  )
}

export default OtherPlaces
