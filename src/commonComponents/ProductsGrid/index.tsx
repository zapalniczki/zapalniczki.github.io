import { Product } from 'api'
import {
  Flexbox,
  Grid,
  LongProductTile,
  QueryLoader,
  SectionHead
} from 'components'
import { LocationDescriptor } from 'history'
import React from 'react'
import { UseQueryResult } from 'react-query'
import { SpaceProps } from 'styled-system'
import Loader from './index.loader'
import ProductTile from './ProductTile'

type Props = {
  link?: {
    label: string,
    to: LocationDescriptor
  },
  loaderCount?: number,
  query: UseQueryResult<Product[]>,
  searchQuery?: string,
  title?: string,
  vertical?: boolean
} & SpaceProps

const ProductsList = ({
  link,
  loaderCount,
  query,
  searchQuery,
  title,
  vertical,
  ...props
}: Props) => (
    <QueryLoader
      Loader={<Loader count={loaderCount} title={!!title || !!link} />}
      query={query}
    >
      {(products) => {
        let Component = ProductTile
        if (vertical) {
          Component = LongProductTile
        }

        if (!products.length) {
          return null
        }

        return (
          <Flexbox as="section" flexDirection="column" {...props}>
            <SectionHead link={link} title={title} />
            <Grid gridTemplateColumns={vertical ? '1fr' : 'repeat(3, 1fr)'}>
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
                  <Component key={product.id} product={product} />
                ))}
            </Grid>
          </Flexbox>
        )
      }}
    </QueryLoader>
  )

export default ProductsList
