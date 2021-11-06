import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import { UseQueryResult } from 'react-query'

type Props<T> = {
  Loader?: ReactElement
  children: (data: T) => ReactNode
  query: UseQueryResult<T>
  showLoading?: boolean
}

function QueryLoader<T>({
  Loader,
  children,
  query,
  showLoading = true
}: Props<T>): JSX.Element | null {
  if (query.isFetching) {
    if (Loader) {
      return Loader
    }

    if (showLoading) {
      return <p>ładowanie...</p>
    }

    return null
  } else if (query.isSuccess) {
    return <>{children(query.data as T)}</>
  }

  return <p>ERROR</p>
}

export default QueryLoader
