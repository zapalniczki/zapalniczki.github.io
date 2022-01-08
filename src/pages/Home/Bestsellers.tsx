import { getProducts } from 'api'
import { ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'

const Bestsellers = () => {
  const { homeBestsellersDisplay, homeBestsellersOrder } =
    useContext(remoteConfigContext)
  const { t } = useTranslation('HOME')

  const params = { bestseller: true }
  const bestsellersQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getProducts(params)
  )

  if (!homeBestsellersDisplay) {
    return null
  }

  return (
    <ProductsGrid
      loaderCount={6}
      marginTop="xxl-size"
      order={homeBestsellersOrder}
      query={bestsellersQuery}
      title={t('bestsellers.title')}
    />
  )
}

export default Bestsellers
