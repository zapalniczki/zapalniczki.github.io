import { getChristmasProducts } from 'api'
import { ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { CHRISTMAS_2021 } from 'constants/routes'
import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'

const Christmas2021 = () => {
  const commonT = useTranslation('HOME').withBase('CHRISTMAS_2021')

  const params = {
    short: true,
    collectionId: '3eb90808-0d57-4173-ac0a-2fb8bc66c049'
  }

  const featuredQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getChristmasProducts(params)
  )

  return (
    <ProductsGrid
      link={{
        to: CHRISTMAS_2021,
        label: commonT('linkLabel')
      }}
      loaderCount={3}
      marginTop="xxl-size"
      query={featuredQuery}
      title={commonT('title')}
    />
  )
}

export default Christmas2021
