import { Flexbox, Grid, QueryLoader, SectionHead } from 'components'
import { LocationDescriptor } from 'history'
import React from 'react'
import { UseQueryResult } from 'react-query'
import { SpaceProps } from 'styled-system'
import ProductsGridLoader from './index.loader'
import ProductTile from './ProductTile'
import { GetFeaturedResponseItem, GetProductsResponseItem } from 'models'

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
}: Props) => (
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

      return (
        <Flexbox as="section" flexDirection="column" {...props}>
          <SectionHead link={link} title={title} />
          <Grid gridTemplateColumns="repeat(3, 1fr)">
            {products
              .filter((product) => {
                if (searchQuery) {
                  return product.name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
                }

                return true
              })
              .map((product) => (
                <ProductTile key={product.id} product={product} />
              ))}
          </Grid>
        </Flexbox>
      )
    }}
  </QueryLoader>
)

export default ProductsGrid
export { ProductsGridLoader }
