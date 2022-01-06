import { getProducts } from 'api'
import { ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import React from 'react'
import { useQuery } from 'react-query'

const Products = () => {
  const params = {
    collectionId: 'c8445406-9971-424e-a788-df15dd6f0460'
  }
  const productsQuery = useQuery([PRODUCTS_TABLE, params], () =>
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
