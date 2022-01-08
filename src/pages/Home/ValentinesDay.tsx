import { getProducts } from 'api'
import { ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { VALENTINES_DAY } from 'constants/routes'
import { useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'

const ValentinesDay = () => {
  const commonT = useTranslation('HOME').withBase('VALENTINES_DAY')
  const { valentinesDay } = useContext(remoteConfigContext)

  const params = {
    limit: 3,
    collectionId: 'c8445406-9971-424e-a788-df15dd6f0460'
  }
  const query = useQuery([PRODUCTS_TABLE, params], () => getProducts(params))

  if (!valentinesDay) {
    return null
  }

  return (
    <ProductsGrid
      link={{
        to: VALENTINES_DAY,
        label: commonT('linkLabel')
      }}
      loaderCount={3}
      marginTop="xxl-size"
      query={query}
      title={commonT('title')}
    />
  )
}

export default ValentinesDay
