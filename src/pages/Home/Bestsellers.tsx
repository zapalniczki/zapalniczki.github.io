import { getBestsellers } from 'api'
import { ProductsGrid } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'

const Bestsellers = () => {
  const { t } = useTranslation('HOME')
  const bestsellersQuery = useQuery('bestsellers', getBestsellers)

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
