import { useGetOtherPlaces } from 'api'
import { Collection, Label } from 'models'
import { ProductsGrid } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'

type Props = {
  collectionId: Collection['id']
  labelId: Label['id']
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
