import { getChristmasProducts } from 'api'
import { ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'

const NewYearProducts = () => {
  const t = useTranslation('CHRISTMAS_2021').withBase('NEW_YEAR_PRODUCTS')

  const params = {
    newYear: true,
    collectionId: '3eb90808-0d57-4173-ac0a-2fb8bc66c049'
  }

  const newYearProductsQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getChristmasProducts(params)
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