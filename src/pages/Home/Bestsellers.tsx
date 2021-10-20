import { useGetBestsellers } from 'api'
import { ProductsGrid } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'

const Bestsellers = () => {
  const { t } = useTranslation('HOME')
  const productsQuery = useGetBestsellers()

  return (
    <ProductsGrid
      marginTop="xxl-size"
      query={productsQuery}
      title={t('bestsellers.title')}
    />
  )
}

export default Bestsellers
