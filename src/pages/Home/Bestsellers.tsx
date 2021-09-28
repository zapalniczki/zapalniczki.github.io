import { useGetProducts } from 'api'
import { ProductsGrid } from 'commonComponents'
import { useTranslation } from 'hooks'
import React from 'react'

const Bestsellers = () => {
  const { t } = useTranslation('HOME')
  const productsQuery = useGetProducts()

  return (
    <ProductsGrid
      marginTop="xxl-size"
      title={t('bestsellers.title')}
      query={productsQuery}
    />
  )
}

export default Bestsellers
