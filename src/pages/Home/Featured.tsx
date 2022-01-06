import { getProducts } from 'api'
import { ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'

const Featured = () => {
  const commonT = useTranslation('HOME').withBase('FEATURED')

  const params = {
    limit: 3,
    collectionId: '9c0d32bb-3690-43c7-bca8-ab4d2aff80d5'
  }
  const featuredQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getProducts(params)
  )

  return (
    <ProductsGrid
      loaderCount={3}
      marginTop="xxl-size"
      query={featuredQuery}
      title={commonT('title')}
    />
  )
}

export default Featured
