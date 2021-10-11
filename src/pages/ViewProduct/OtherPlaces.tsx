import { useGetOtherPlaces } from 'api'
import { Product } from 'models'
import { ProductsGrid } from 'commonComponents'
import React from 'react'
import { useTranslation } from 'hooks'

type Props = {
  collectionId: Product['collection_id']
  labelId: string
  // Product['label_id']
}

const OtherPlaces = ({ collectionId, labelId }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')

  const productsQuery = useGetOtherPlaces({ labelId, collectionId })

  return null
  // <ProductsGrid
  //   link={{
  //     to: {
  //       pathname: '/products',
  //       state: {
  //         collectionId
  //       }
  //     },
  //     label: t('otherIcons.linkLabel')
  //   }}
  //   marginTop="xxl-size"
  //   query={productsQuery}
  //   title={t('otherPlaces.title')}
  // />
}

export default OtherPlaces
