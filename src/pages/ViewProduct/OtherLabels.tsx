import { getOtherLabels } from 'api'
import { ProductsGrid } from 'components'
import { useTranslation } from 'hooks'
import { Collection, Label } from 'braty-common'
import React from 'react'
import { useQuery } from 'react-query'

type Props = {
  collectionId: Collection['id']
  labelId: Label['id']
}

const OtherLabels = ({ collectionId, labelId }: Props) => {
  const t = useTranslation('VIEW_PRODUCT').withBase('OTHER_LABELS')

  const params = { labelId, collectionId }
  const otherLabelsQuery = useQuery(['other_labels', params], () =>
    getOtherLabels(params)
  )

  return (
    <ProductsGrid
      link={{
        to: { pathname: '/products', search: `collectionId=${collectionId}` },
        label: t('linkLabel')
      }}
      loaderCount={3}
      marginTop="xxl-size"
      query={otherLabelsQuery}
      title={t('title')}
    />
  )
}

export default OtherLabels
