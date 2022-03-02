import { getProducts } from 'api'
import { ProductsGrid } from 'components'

import { useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { DB_TABLES } from 'braty-common'

const Bestsellers = () => {
  const { homeBestsellersDisplay, homeBestsellersOrder } =
    useContext(remoteConfigContext)
  const { t } = useTranslation('HOME')

  const params = { bestseller: true }
  const bestsellersQuery = useQuery(
    [DB_TABLES.PRODUCTS, params],
    () => getProducts(params),
    {
      enabled: true
    }
  )

  if (!homeBestsellersDisplay) {
    return null
  }

  return (
    <ProductsGrid
      loaderCount={6}
      marginTop="xxxl-size"
      order={homeBestsellersOrder}
      query={bestsellersQuery}
      title={t('bestsellers.title')}
    />
  )
}

export default Bestsellers
