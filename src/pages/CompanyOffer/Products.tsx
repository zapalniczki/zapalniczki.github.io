import { getProducts } from 'api'
import { ProductsGrid } from 'components'

import React from 'react'
import { useQuery } from 'react-query'
import { Collection, DB_TABLES } from 'braty-common'

type Props = {
  collectionKey?: Collection['key']
  title: string
}

const Products = ({ collectionKey, title }: Props) => {
  const params = { collectionKey }
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
