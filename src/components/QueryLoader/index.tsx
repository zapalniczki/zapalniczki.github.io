import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import { UseQueryResult } from 'react-query'

type Props<T> = {
  children: (data: T) => ReactNode
  query: UseQueryResult<T>
  Loader?: ReactElement
}

function QueryLoader<T>({ children, query, Loader }: Props<T>): JSX.Element {
  if (query.isFetching) {
    if (Loader) {
      return Loader
    } else {
      return <p>ładowanie...</p>
    }
  } else if (query.isSuccess) {
    return <>{children(query.data as T)}</>
  } else {
    return <p>ERROR</p>
  }
}

export default QueryLoader
