import { getProducts } from 'api'
import { ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'

const Featured = () => {
  const { homeFeaturedCount, homeFeaturedDisplay, homeFeaturedOrder } =
    useContext(remoteConfigContext)
  const commonT = useTranslation('HOME').withBase('FEATURED')

  const params = {
    limit: homeFeaturedCount,
    collectionId: '9c0d32bb-3690-43c7-bca8-ab4d2aff80d5'
  }
  const featuredQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getProducts(params)
  )

  if (!homeFeaturedDisplay) {
    return null
  }

  return (
    <ProductsGrid
      loaderCount={homeFeaturedCount}
      marginTop="xxl-size"
      order={homeFeaturedOrder}
      query={featuredQuery}
      title={commonT('title')}
    />
  )
}

export default Featured
