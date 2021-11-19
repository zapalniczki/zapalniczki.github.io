import { getPaginatedProducts } from 'api'
import { BackButton, Page, ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { PRODUCTS } from 'constants/routes'
import {
  useBreakpoints,
  useScrollTop,
  usePageTitle,
  useTranslation
} from 'hooks'
import debounce from 'lodash.debounce'
import React, { useMemo, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import Filters from './Filters'

const Products = () => {
  const { state } = useLocation<LocationState>()
  const { t } = useTranslation('PRODUCTS')

  usePageTitle(t('title'))
  useScrollTop()

  const isDesktop = useBreakpoints('desktop')

  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebuncedSearchQuery] = useState('')
  const [filters, setFilters] = useState<Filters>({})

  const isFiltered = state?.labelId || state?.collectionId

  const changeHandler = (value: React.SetStateAction<string>) => {
    setDebuncedSearchQuery(value)
  }

  const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 300), [])

  const params = {
    page: 0,
    size: isDesktop ? 9 : 5,
    collectionId: filters.collectionId || state?.collectionId,
    labelId: state?.labelId,
    iconId: filters.iconId,
    name: debouncedSearchQuery
  }

  const infiniteProductQuery = useInfiniteQuery(
    [PRODUCTS_TABLE, params],
    ({ pageParam = params.page }) =>
      getPaginatedProducts({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.hasNextPage ? lastPage.page + 1 : undefined,
      keepPreviousData: true
    }
  )

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
        hideWhenEmpty={false}
        marginTop="l-size"
        paginated
        query={infiniteProductQuery}
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
