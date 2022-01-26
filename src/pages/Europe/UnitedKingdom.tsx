import { getProducts } from 'api'
import { ProductsGrid } from 'components'

import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'
import { DB_TABLES } from 'braty-common'

const UnitedKingdom = () => {
  const t = useTranslation('EUROPE').withBase('UNITED_KINGDOM')

  const params = { collectionId: 'daa8e336-4ecc-4214-ad57-aa760dcaa35e' }
  const unitedKingdomProductsQuery = useQuery(
    [DB_TABLES.PRODUCTS, params],
    () => getProducts(params)
  )

  return (
    <ProductsGrid
      hideWhenEmpty={false}
      loaderCount={6}
      marginTop="xxl-size"
      query={unitedKingdomProductsQuery}
      title={t('title')}
    />
  )
}

export default UnitedKingdom
