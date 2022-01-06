import { getProducts } from 'api'
import { ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { CHRISTMAS_2021 } from 'constants/routes'
import { useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'

const Christmas2021 = () => {
  const { christmas2021 } = useContext(remoteConfigContext)

  const commonT = useTranslation('HOME').withBase('CHRISTMAS_2021')

  const params = {
    limit: 3,
    collectionId: '3eb90808-0d57-4173-ac0a-2fb8bc66c049'
  }

  if (!christmas2021) {
    return null
  }

  const featuredQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getProducts(params)
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
