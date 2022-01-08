import { getProducts } from 'api'
import { ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import React from 'react'
import { useQuery } from 'react-query'

type Props = {
  collectionId?: string
  title: string
}

const Products = ({ collectionId, title }: Props) => {
  const params = { collectionId }
  const productsQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getProducts(params)
  )

  return (
    <ProductsGrid
      hideWhenEmpty={false}
      loaderCount={3}
      marginTop="xxl-size"
      query={productsQuery}
      title={title}
    />
  )
}

export default Products
