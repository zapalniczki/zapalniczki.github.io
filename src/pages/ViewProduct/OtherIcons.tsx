import { ProductDetails, useGetOtherIcons } from 'api'
import { ProductsGrid } from 'commonComponents'
import React from 'react'
import { useTranslation } from 'hooks'

type Props = {
  labelId: ProductDetails['label']['label']
  iconId: ProductDetails['icon']['label']
}

const OtherIcons = ({ labelId, iconId }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')

  const productsQuery = useGetOtherIcons({ labelId, iconId })

  return (
    <ProductsGrid
      marginTop="xxl-size"
      title={t('otherIcons.title')}
      query={productsQuery}
      link={{
        to: {
          pathname: '/products',
          state: {
            labelId
          }
        },
        label: t('otherIcons.linkLabel')
      }}
    />
  )
}

export default OtherIcons
