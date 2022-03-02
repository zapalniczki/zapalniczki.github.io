import { getOtherLabels } from 'api'
import { ProductsGrid } from 'components'
import { useTranslation } from 'hooks'
import { Collection, Label } from 'braty-common'
import React from 'react'
import { useQuery } from 'react-query'

type Props = {
  collectionKey: Collection['key']
  labelKey: Label['key']
}

const OtherLabels = ({ collectionKey, labelKey }: Props) => {
  const t = useTranslation('VIEW_PRODUCT').withBase('OTHER_LABELS')

  const params = { labelKey, collectionKey }
  const otherLabelsQuery = useQuery(['other_labels', params], () =>
    getOtherLabels(params)
  )

  return (
    <ProductsGrid
      link={{
        to: {
          pathname: '/products',
          search: `collection_key=${collectionKey}`
        },
        label: t('linkLabel')
      }}
      loaderCount={3}
      marginTop="xxxl-size"
      query={otherLabelsQuery}
      title={t('title')}
    />
  )
}

export default OtherLabels
