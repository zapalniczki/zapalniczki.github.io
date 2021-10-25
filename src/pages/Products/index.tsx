import {
  BackButton,
  ProductsGrid,
  Flexbox,
  Page,
  QueryLoader,
  Text
} from 'components'
import { useScrollTop, useTabTitle } from 'hooks'
import React from 'react'
import { useTranslation } from 'hooks'
import { CallMeBack } from 'commonComponents'
import { useLocation } from 'react-router-dom'
import { PRODUCTS } from 'constants/routes'
import Search from './Search'
import { useState } from 'react'
import {
  GetCollectionProductsResponseItem,
  GetLabelProductsResponseItem,
  GetProductsResponseItem
} from 'models'
import { getCollectionProducts, getLabelProducts, getProducts } from 'api'
import { useQuery, UseQueryResult } from 'react-query'
import Loader from './index.loader'
import { PRODUCTS_TABLE } from 'constants/db_tables'

const Products = () => {
  const { state } = useLocation<{ collectionId?: string; labelId?: string }>()
  const { t } = useTranslation('PRODUCTS')

  useTabTitle(t('title'))
  useScrollTop()

  const [query, setQuery] = useState('')

  let productsQuery: UseQueryResult<
    (
      | GetLabelProductsResponseItem
      | GetProductsResponseItem
      | GetCollectionProductsResponseItem
    )[]
  >
  if (state?.labelId) {
    const params = {
      labelId: state.labelId
    }

    productsQuery = useQuery([PRODUCTS_TABLE, params], () =>
      getLabelProducts(params)
    )
  } else if (state?.collectionId) {
    const params = {
      collectionId: state.collectionId
    }

    productsQuery = useQuery([PRODUCTS_TABLE, params], () =>
      getCollectionProducts(params)
    )
  } else {
    productsQuery = useQuery(PRODUCTS_TABLE, getProducts)
  }

  const isFiltered = state?.labelId || state?.collectionId

  return (
    <Page>
      <CallMeBack />

      <QueryLoader Loader={<Loader />} query={productsQuery}>
        {(data) => {
          const count = data.length

          return (
            <>
              {isFiltered && (
                <BackButton
                  label={t('showAllLabel')}
                  marginTop="xxl-size"
                  to={PRODUCTS}
                />
              )}

              {!isFiltered && (
                <Flexbox
                  alignItems="center"
                  flexDirection="row-reverse"
                  justifyContent="space-between"
                  marginTop="xxl-size"
                >
                  <Search onChange={(value) => setQuery(value)} value={query} />

                  {!query && (
                    <Text
                      fontWeight="bold"
                      marginRight="m-size"
                      type="subtitle-1"
                    >
                      {count === 1
                        ? t('productsSingle', { count })
                        : count && count < 5
                        ? t('productsFew', { count })
                        : t('productsMultiple', { count })}
                    </Text>
                  )}
                </Flexbox>
              )}

              <ProductsGrid
                marginTop="m-size"
                query={productsQuery}
                searchQuery={query}
              />
            </>
          )
        }}
      </QueryLoader>
    </Page>
  )
}

export default Products
