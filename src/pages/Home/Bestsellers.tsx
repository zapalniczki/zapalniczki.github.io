import { getProducts } from 'api'
import { ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'

const Bestsellers = () => {
  const { t } = useTranslation('HOME')

  const params = { bestseller: true }
  const bestsellersQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getProducts(params)
  )

  return (
    <ProductsGrid
      loaderCount={6}
      marginTop="xxl-size"
      query={bestsellersQuery}
      title={t('bestsellers.title')}
    />
  )
}

export default Bestsellers
