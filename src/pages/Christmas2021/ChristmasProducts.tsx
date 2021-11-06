import { getChristmasProducts } from 'api'
import { ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'

const ChristmasProducts = () => {
  const t = useTranslation('CHRISTMAS_2021').withBase('CHRISTMAS_PRODUCTS')

  const params = { newYear: false }
  const christmasProductsQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getChristmasProducts(params)
  )

  return (
    <ProductsGrid
      hideWhenEmpty={false}
      loaderCount={6}
      marginTop="xxl-size"
      query={christmasProductsQuery}
      title={t('title')}
    />
  )
}

export default ChristmasProducts
