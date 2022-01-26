import { getProducts } from 'api'
import { ProductsGrid } from 'components'

import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'
import { DB_TABLES } from 'braty-common'

const Germany = () => {
  const t = useTranslation('EUROPE').withBase('GERMANY')

  const params = { collectionId: 'b48aa295-1486-41ee-9284-2b835e7ef34b' }
  const germanyProductsQuery = useQuery([DB_TABLES.PRODUCTS, params], () =>
    getProducts(params)
  )

  return (
    <ProductsGrid
      hideWhenEmpty={false}
      loaderCount={6}
      marginTop="xxl-size"
      query={germanyProductsQuery}
      title={t('title')}
    />
  )
}

export default Germany
