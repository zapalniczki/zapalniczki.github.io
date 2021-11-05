import { getOtherPlaces } from 'api'
import { ProductsGrid } from 'components'
import { useTranslation } from 'hooks'
import { Collection, Label } from 'models'
import React from 'react'
import { useQuery } from 'react-query'

type Props = {
  collectionId: Collection['id']
  labelId: Label['id']
}

const OtherPlaces = ({ collectionId, labelId }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')

  const params = { labelId, collectionId }
  const otherPlacesQuery = useQuery(['other_places', params], () =>
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
