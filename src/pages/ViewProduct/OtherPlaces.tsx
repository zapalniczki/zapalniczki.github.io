import { getOtherPlaces } from 'api'
import { Collection, Label } from 'models'
import { ProductsGrid } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { useQuery } from 'react-query'
import { PRODUCTS_TABLE } from 'constants/db_tables'

type Props = {
  collectionId: Collection['id']
  labelId: Label['id']
}

const OtherPlaces = ({ collectionId, labelId }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')

  const params = { labelId, collectionId }
  const otherPlacesQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getOtherPlaces(params)
  )

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
      query={otherPlacesQuery}
      title={t('otherPlaces.title')}
    />
  )
}

export default OtherPlaces
