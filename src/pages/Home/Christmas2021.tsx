import { getProducts } from 'api'
import { DB_TABLES, ROUTES } from 'braty-common'
import { ProductsGrid } from 'components'
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

  const featuredQuery = useQuery([DB_TABLES.PRODUCTS, params], () =>
    getProducts(params)
  )

  return (
    <ProductsGrid
      link={{
        to: ROUTES.CHRISTMAS_2021,
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
