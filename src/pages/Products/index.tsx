import { getPaginatedProducts } from 'api'
import { DB_TABLES, ROUTES } from 'braty-common'
import { BackButton, Page, ProductsGrid } from 'components'
import {
  useBreakpoints,
  usePageTitle,
  useScrollTop,
  useTranslation
} from 'hooks'
import debounce from 'lodash.debounce'
import React, { useMemo, useState } from 'react'
import { useInfiniteQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import Filters from './Filters'

const Products = () => {
  const { language, t } = useTranslation('PRODUCTS')
  const isAboveDesktop = useBreakpoints('desktop max')
  const [searchParams] = useSearchParams({})

  usePageTitle(t('title'))
  useScrollTop()

  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebuncedSearchQuery] = useState('')

  const changeHandler = (value: React.SetStateAction<string>) =>
    setDebuncedSearchQuery(value)

  const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 300), [])

  const labelId = searchParams.get('labelId') || undefined
  const iconId = searchParams.get('iconId') || undefined
  const collectionId = searchParams.get('collectionId') || undefined

  const isFilteredByLabelId = labelId

  const nameParamsKey = `name_${language}` as const
  const params = {
    page: 0,
    size: isAboveDesktop ? 9 : 4,
    collectionId,
    labelId,
    iconId,
    [nameParamsKey]: debouncedSearchQuery
  }

  const infiniteProductQuery = useInfiniteQuery(
    [DB_TABLES.PRODUCTS, params],
    ({ pageParam = params.page }) =>
      getPaginatedProducts({
        ...params,
        page: pageParam
      }),
    {
      getNextPageParam: (lastPage) =>
        lastPage.hasNextPage ? lastPage.page + 1 : undefined,
      keepPreviousData: true
    }
  )

  return (
    <Page>
      {!isFilteredByLabelId && (
        <Filters
          searchQuery={searchQuery}
          setSearchQuery={(value) => {
            setSearchQuery(value)
            debouncedChangeHandler(value)
          }}
        />
      )}

      <ProductsGrid
        hideWhenEmpty={false}
        loaderCount={6}
        marginTop="l-size"
        paginated
        query={infiniteProductQuery}
        sectionHeadChildren={
          isFilteredByLabelId ? (
            <BackButton label={t('showAllLabel')} to={ROUTES.PRODUCTS} />
          ) : undefined
        }
        showCount
      />
    </Page>
  )
}

export default Products
