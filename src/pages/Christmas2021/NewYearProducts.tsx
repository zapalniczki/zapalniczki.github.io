import { getProducts } from 'api'
import { ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'

const NewYearProducts = () => {
  const t = useTranslation('CHRISTMAS_2021').withBase('NEW_YEAR_PRODUCTS')

  const params = {
    collectionId: '60fe5eba-733b-4040-85b8-a67cb8064e0a'
  }

  const newYearProductsQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getProducts(params)
  )

  return (
    <ProductsGrid
      hideWhenEmpty={false}
      loaderCount={6}
      marginTop="xxl-size"
      query={newYearProductsQuery}
      title={t('title')}
    />
  )
}

export default NewYearProducts
