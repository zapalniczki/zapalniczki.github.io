import { getProducts } from 'api'
import { ProductsGrid } from 'components'

import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'
import { DB_TABLES } from 'braty-common'

const NewYearProducts = () => {
  const t = useTranslation('CHRISTMAS_2021').withBase('NEW_YEAR_PRODUCTS')

  const params = { collectionKey: 'NEW_YEARS_EVE_2022' }
  const newYearProductsQuery = useQuery([DB_TABLES.PRODUCTS, params], () =>
    getProducts(params)
  )

  return (
    <ProductsGrid
      hideWhenEmpty={false}
      loaderCount={6}
      marginTop="xxl-size"
      query={newYearProductsQuery}
      title={t('title')}
    />
  )
}

export default NewYearProducts
