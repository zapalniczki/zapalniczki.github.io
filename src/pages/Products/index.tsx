import { getProducts } from 'api'
import { BackButton, Page, ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { PRODUCTS } from 'constants/routes'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import debounce from 'lodash.debounce'
import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import Filters from './Filters'

const Products = () => {
  const { state } = useLocation<LocationState>()
  const { t } = useTranslation('PRODUCTS')

  useTabTitle(t('title'))
  useScrollTop()

  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebuncedSearchQuery] = useState('')
  const [filters, setFilters] = useState<Filters>({})

  const params = {
    collectionId: filters.collectionId || state?.collectionId,
    labelId: state?.labelId,
    iconId: filters.iconId,
    name: debouncedSearchQuery
  }
  const productsQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getProducts(params)
  )

  const isFiltered = state?.labelId || state?.collectionId

  const changeHandler = (value: React.SetStateAction<string>) => {
    setDebuncedSearchQuery(value)
  }

  const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 300), [])

  return (
    <Page>
      {!isFiltered && (
        <Filters
          filters={filters}
          searchQuery={searchQuery}
          setFilters={setFilters}
          setSearchQuery={(value) => {
            setSearchQuery(value)
            debouncedChangeHandler(value)
          }}
        />
      )}

      <ProductsGrid
        marginTop="l-size"
        query={productsQuery}
        sectionHeadChildren={
          isFiltered ? (
            <BackButton label={t('showAllLabel')} to={PRODUCTS} />
          ) : undefined
        }
        showCount
      />
    </Page>
  )
}

type LocationState = {
  collectionId?: string
  labelId?: string
}

export type Filters = {
  collectionId?: string
  iconId?: string
}

export default Products
