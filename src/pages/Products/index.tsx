import { getPaginatedProducts } from 'api'
import { BackButton, Page, ProductsGrid } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { PRODUCTS } from 'constants/routes'
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
  const { t } = useTranslation('PRODUCTS')
  const isDesktop = useBreakpoints('desktop')
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

  const isFiltered = labelId

  const params = {
    page: 0,
    size: isDesktop ? 9 : 5,
    collectionId: collectionId,
    labelId: labelId,
    iconId: iconId,
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
          searchQuery={searchQuery}
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

export default Products
