import { useGetFeatured } from 'api/products'
import { ProductsGrid } from 'commonComponents'
import { useTranslation } from 'hooks'
import React from 'react'

const Featured = () => {
  const { t: commonT } = useTranslation('HOME')
  const featuredQuery = useGetFeatured()

  return (
    <ProductsGrid
      loaderCount={3}
      marginTop="xxl-size"
      query={featuredQuery}
      title={commonT('FEATURED.title')}
      vertical
    />
  )
}

export default Featured
