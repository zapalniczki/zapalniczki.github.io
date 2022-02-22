import { getProducts } from 'api'
import { ProductsGrid } from 'components'

import React from 'react'
import { useQuery } from 'react-query'
import { Collection, DB_TABLES } from 'braty-common'

type Props = {
  collectionKey?: Collection['key']
  loaderCount?: number
  title?: string
}

const Products = ({ collectionKey, loaderCount, title }: Props) => {
  const params = { collectionKey }
  const productsQuery = useQuery([DB_TABLES.PRODUCTS, params], () =>
    getProducts(params)
  )

  return (
    <ProductsGrid
      hideWhenEmpty={false}
      loaderCount={loaderCount}
      marginTop="xxl-size"
      query={productsQuery}
      title={title}
    />
  )
}

export default Products
