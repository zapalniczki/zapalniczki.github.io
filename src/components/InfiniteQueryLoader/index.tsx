import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import { UseInfiniteQueryResult } from 'react-query'

type Props<T> = {
  Loader?: ReactElement
  children: (data: T[]) => ReactNode
  query: UseInfiniteQueryResult<T>
  showLoading?: boolean
}

function InfiniteQueryLoader<T>({
  Loader,
  children,
  query,
  showLoading = true
}: Props<T>): JSX.Element | null {
  if (query.isFetching && !query.isFetchingNextPage) {
    if (Loader) {
      return Loader
    }

    if (showLoading) {
      return <p>ładowanie...</p>
    }

    return null
  } else if (query.isSuccess) {
    return <>{children(query.data.pages)}</>
  }

  return <p>ERROR</p>
}

export default InfiniteQueryLoader
