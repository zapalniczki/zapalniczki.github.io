import { ProductDetails, useGetOtherIcons } from 'api'
import { ProductsGrid } from 'commonComponents'
import React from 'react'
import { useTranslation } from 'hooks'

type Props = {
  labelId: ProductDetails['label']['label']
  iconId: ProductDetails['icon']['label']
}

const OtherIcons = ({ iconId, labelId }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')

  const productsQuery = useGetOtherIcons({ labelId, iconId })

  return (
    <ProductsGrid
      link={{
        to: {
          pathname: '/products',
          state: {
            labelId
          }
        },
        label: t('otherIcons.linkLabel')
      }}
      marginTop="xxl-size"
      query={productsQuery}
      title={t('otherIcons.title')}
    />
  )
}

export default OtherIcons
