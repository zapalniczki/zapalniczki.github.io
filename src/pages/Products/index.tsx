import { getProducts } from 'api'
import { CallMeBack } from 'commonComponents'
import {
  BackButton,
  Flexbox,
  Page,
  ProductsGrid,
  QueryLoader,
  Text
} from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { PRODUCTS } from 'constants/routes'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import Loader from './index.loader'
import Search from './Search'

const Products = () => {
  const { state } = useLocation<LocationState>()
  const { t } = useTranslation('PRODUCTS')

  useTabTitle(t('title'))
  useScrollTop()

  const [query, setQuery] = useState('')

  const productsQuery = useQuery([PRODUCTS_TABLE, state], () =>
    getProducts(state)
  )

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

type LocationState = {
  collectionId?: string
  labelId?: string
}

export default Products
