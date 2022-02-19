import { getProducts } from 'api'
import { ProductsGrid } from 'components'

import React from 'react'
import { useQuery } from 'react-query'
import { DB_TABLES } from 'braty-common'

const Products = () => {
  const params = {
    collectionKey: 'VALENTINES_DAY'
  }
  const productsQuery = useQuery([DB_TABLES.PRODUCTS, params], () =>
    getProducts(params)
  )

  return (
    <ProductsGrid
      hideWhenEmpty={false}
      loaderCount={3}
      marginTop="xxl-size"
      query={productsQuery}
    />
  )
}

export default Products
