import { getProducts } from 'api'
import { ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'

const Featured = () => {
  const { t: commonT } = useTranslation('HOME')

  const params = {
    featured: true
  }
  const featuredQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getProducts(params)
  )

  return (
    <ProductsGrid
      loaderCount={3}
      marginTop="xxl-size"
      query={featuredQuery}
      title={commonT('FEATURED.title')}
    />
  )
}

export default Featured
