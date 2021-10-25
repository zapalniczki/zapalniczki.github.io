import { getFeatured } from 'api'
import { ProductsGrid } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'

const Featured = () => {
  const { t: commonT } = useTranslation('HOME')
  const featuredQuery = useQuery('featured', () => getFeatured())

  return (
    <ProductsGrid
      loaderCount={3}
      marginTop="xxl-size"
      query={featuredQuery}
      title={commonT('FEATURED.title')}
    />
  )
}

export default Featured
