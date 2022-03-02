import { Button, Flexbox, InfiniteQueryLoader, QueryLoader } from 'components'
import { To } from 'history'
import { useTranslation } from 'hooks'
import { GetProductsResponseItem } from 'models'
import React, { ReactNode } from 'react'
import { UseInfiniteQueryResult, UseQueryResult } from 'react-query'
import { NavigateOptions } from 'react-router-dom'
import { OrderProps, SpaceProps } from 'styled-system'
import Content from './Content'
import ProductsGridLoader from './index.loader'

export type BaseProps = {
  hideWhenEmpty?: boolean
  link?: {
    label: string
    options?: NavigateOptions
    to: To
  }
  loaderCount?: number
  sectionHeadChildren?: ReactNode
  showCount?: true
  title?: string
} & SpaceProps &
  OrderProps

type Props = BaseProps &
  (
    | {
        paginated?: false
        query: UseQueryResult<GetProductsResponseItem[]>
      }
    | {
        paginated: true
        query: UseInfiniteQueryResult<InfiniteGetProductsResponse>
      }
  )

const ProductsGrid = ({
  hideWhenEmpty = true,
  link,
  loaderCount,
  sectionHeadChildren,
  showCount,
  title,
  ...props
}: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  const loader = (
    <ProductsGridLoader
      count={loaderCount}
      link={!!link}
      showCount={showCount}
      title={!!title}
      {...props}
    />
  )

  if (!props.paginated) {
    return (
      <QueryLoader Loader={loader} query={props.query}>
        {(products) => (
          <Content
            hideWhenEmpty={hideWhenEmpty}
            link={link}
            products={products}
            sectionHeadChildren={sectionHeadChildren}
            showCount={showCount}
            title={title}
            {...props}
          />
        )}
      </QueryLoader>
    )
  }

  return (
    <InfiniteQueryLoader Loader={loader} query={props.query}>
      {(products) => {
        const productsFlatten = products.map((p) => p.data).flat()

        return (
          <>
            <Content
              count={products[0].count}
              hideWhenEmpty={hideWhenEmpty}
              link={link}
              products={productsFlatten}
              sectionHeadChildren={sectionHeadChildren}
              showCount={showCount}
              title={title}
              {...props}
            />

            {props.query.hasNextPage && (
              <Flexbox
                alignItems="center"
                justifyContent="center"
                marginTop="l-size"
              >
                <Button
                  disabled={props.query.isFetchingNextPage}
                  label={commonT('productsLoadMore')}
                  loading={props.query.isFetchingNextPage}
                  marginRight="s-size"
                  onClick={() => props.query.fetchNextPage()}
                  size="medium"
                />
              </Flexbox>
            )}
          </>
        )
      }}
    </InfiniteQueryLoader>
  )
}

type InfiniteGetProductsResponse = {
  count: number
  data: GetProductsResponseItem[]
  hasNextPage: boolean
  page: number
}

export { ProductsGridLoader }
export default ProductsGrid
