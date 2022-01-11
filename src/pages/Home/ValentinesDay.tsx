import { getProducts } from 'api'
import { ProductsGrid } from 'components'

import { useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { DB_TABLES, ROUTES } from 'braty-common'

const ValentinesDay = () => {
  const commonT = useTranslation('HOME').withBase('VALENTINES_DAY')
  const { homeValentinesDayOrder, valentinesDay } =
    useContext(remoteConfigContext)

  const params = {
    limit: 3,
    collectionId: 'c8445406-9971-424e-a788-df15dd6f0460'
  }
  const query = useQuery([DB_TABLES.PRODUCTS, params], () =>
    getProducts(params)
  )

  if (!valentinesDay) {
    return null
  }

  return (
    <ProductsGrid
      link={{
        to: ROUTES.VALENTINES_DAY,
        label: commonT('linkLabel')
      }}
      loaderCount={3}
      marginTop="xxl-size"
      order={homeValentinesDayOrder}
      query={query}
      title={commonT('title')}
    />
  )
}

export default ValentinesDay
