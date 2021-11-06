import {
  Flexbox,
  Grid,
  Text,
  QueryLoader,
  SectionHead,
  ResultIcon
} from 'components'
import { LocationDescriptor } from 'history'
import React, { ReactNode } from 'react'
import { UseQueryResult } from 'react-query'
import { SpaceProps } from 'styled-system'
import ProductsGridLoader from './index.loader'
import ProductTile from './ProductTile'
import { GetProductsResponseItem } from 'models'
import { useTranslation } from 'hooks'

type Props = {
  hideWhenEmpty?: boolean
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
  hideWhenEmpty = true,
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

        if (hideWhenEmpty && !count) {
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
                flexDirection="column"
                height="25rem"
                justifyContent="center"
                width="100%"
              >
                <ResultIcon size="3x" variant="INFO" />

                <Text marginTop="m-size" type="body-1">
                  {commonT('productsEmptyState')}
                </Text>
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
