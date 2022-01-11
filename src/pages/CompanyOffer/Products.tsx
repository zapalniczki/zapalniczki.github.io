import { getProducts } from 'api'
import { ProductsGrid } from 'components'

import React from 'react'
import { useQuery } from 'react-query'
import { DB_TABLES } from 'braty-common'

type Props = {
  collectionId?: string
  title: string
}

const Products = ({ collectionId, title }: Props) => {
  const params = { collectionId }
  const productsQuery = useQuery([DB_TABLES.PRODUCTS, params], () =>
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
