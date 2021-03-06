import { getProducts } from 'api'
import { DB_TABLES, ROUTES } from 'braty-common'
import { ProductsGrid } from 'components'
import { useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'

const NewYearsEve2022 = () => {
  const { christmas2021 } = useContext(remoteConfigContext)
  const commonT = useTranslation('HOME').withBase('NEW_YEARS_EVE_2022')

  const params = {
    limit: 3,
    collectionId: '60fe5eba-733b-4040-85b8-a67cb8064e0a'
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

export default NewYearsEve2022
