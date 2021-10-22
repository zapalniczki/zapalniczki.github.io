import { Flexbox, Grid, Text, QueryLoader, SectionHead } from 'components'
import { LocationDescriptor } from 'history'
import React from 'react'
import { UseQueryResult } from 'react-query'
import { SpaceProps } from 'styled-system'
import ProductsGridLoader from './index.loader'
import ProductTile from './ProductTile'
import { GetFeaturedResponseItem, GetProductsResponseItem } from 'models'
import { useTranslation } from 'hooks'

type Props = {
  link?: {
    label: string
    to: LocationDescriptor
  }
  loaderCount?: number
  query: UseQueryResult<(GetFeaturedResponseItem | GetProductsResponseItem)[]>
  searchQuery?: string
  title?: string
} & SpaceProps

const ProductsGrid = ({
  link,
  loaderCount,
  query,
  searchQuery,
  title,
  ...props
}: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <QueryLoader
      Loader={
        <ProductsGridLoader count={loaderCount} title={!!title || !!link} />
      }
      query={query}
    >
      {(products) => {
        if (!products.length) {
          return null
        }

        const filteredProducts = products.filter((product) => {
          if (searchQuery) {
            return product.name
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          }

          return true
        })

        return (
          <Flexbox as="section" flexDirection="column" {...props}>
            <SectionHead link={link} title={title} />

            {filteredProducts.length === 0 && (
              <Flexbox
                alignItems="center"
                height="200px"
                justifyContent="center"
                width="100%"
              >
                <Text type="body-1">{commonT('emptyState')}</Text>
              </Flexbox>
            )}

            <Grid gridTemplateColumns="repeat(3, 1fr)">
              {filteredProducts.map((product) => (
                <ProductTile key={product.id} product={product} />
              ))}
            </Grid>
          </Flexbox>
        )
      }}
    </QueryLoader>
  )
}

export { ProductsGridLoader }
export default ProductsGrid
