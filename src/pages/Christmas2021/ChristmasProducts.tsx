import { getProducts } from 'api'
import { ProductsGrid } from 'components'

import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'
import { DB_TABLES } from 'braty-common'

const ChristmasProducts = () => {
  const t = useTranslation('CHRISTMAS_2021').withBase('CHRISTMAS_PRODUCTS')

  const params = { collectionKey: 'CHRISTMAS_2021' }
  const christmasProductsQuery = useQuery([DB_TABLES.PRODUCTS, params], () =>
    getProducts(params)
  )

  return (
    <ProductsGrid
      hideWhenEmpty={false}
      loaderCount={6}
      marginTop="xxl-size"
      query={christmasProductsQuery}
      title={t('title')}
    />
  )
}

export default ChristmasProducts
