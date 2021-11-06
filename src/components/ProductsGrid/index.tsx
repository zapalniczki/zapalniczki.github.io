import { Flexbox, Grid, Text, QueryLoader, SectionHead } from 'components'
import { LocationDescriptor } from 'history'
import React, { ReactNode } from 'react'
import { UseQueryResult } from 'react-query'
import { SpaceProps } from 'styled-system'
import ProductsGridLoader from './index.loader'
import ProductTile from './ProductTile'
import { GetProductsResponseItem } from 'models'
import { useTranslation } from 'hooks'

type Props = {
  link?: {
    label: string
    to: LocationDescriptor
  }
  loaderCount?: number
  query: UseQueryResult<GetProductsResponseItem[]>
  sectionHeadChildren?: ReactNode
  showCount?: true
  title?: string
} & SpaceProps

const ProductsGrid = ({
  link,
  loaderCount,
  query,
  sectionHeadChildren,
  showCount,
  title,
  ...props
}: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <QueryLoader
      Loader={
        <ProductsGridLoader
          count={loaderCount}
          title={!!title || !!link || !!showCount || !!sectionHeadChildren}
          {...props}
        />
      }
      query={query}
    >
      {(products) => {
        const count = products.length

        if (!count) {
          return null
        }

        return (
          <Flexbox as="section" flexDirection="column" {...props}>
            <SectionHead
              count={showCount ? count : undefined}
              link={link}
              title={title}
            >
              {sectionHeadChildren || undefined}
            </SectionHead>

            {!count && (
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
              {products.map((product) => (
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
