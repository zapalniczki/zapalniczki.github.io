import { useTranslation } from 'hooks'
import React, { ReactElement, ReactNode } from 'react'
import { UseInfiniteQueryResult } from 'react-query'
import ErrorFetchingMessage from '../ErrorFetchingMessage'

type Props<T> = {
  Loader?: ReactElement
  children: (data: T[]) => ReactNode
  persistLoader?: boolean
  query: UseInfiniteQueryResult<T>
  showLoading?: boolean
}

function InfiniteQueryLoader<T>({
  Loader,
  children,
  persistLoader,
  query,
  showLoading = true
}: Props<T>): JSX.Element | null {
  const commonT = useTranslation('COMMON').withBase('QUERY_LOADER')

  if (persistLoader || (query.isFetching && !query.isFetchingNextPage)) {
    if (Loader) {
      return Loader
    }

    if (showLoading) {
      return <p>{commonT('loading')}</p>
    }

    return null
  } else if (query.isSuccess) {
    return <>{children(query.data.pages)}</>
  }

  return <ErrorFetchingMessage Loader={Loader} refetch={query.refetch} />
}

export default InfiniteQueryLoader
