import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import { UseQueryResult } from 'react-query'

type Props<T> = {
  Loader?: ReactElement,
  children: (data: T) => ReactNode,
  query: UseQueryResult<T>
}

function QueryLoader<T>({ Loader, children, query }: Props<T>): JSX.Element {
  if (query.isFetching) {
    if (Loader) {
      return Loader
    } 
      return <p>ładowanie...</p>
    
  } else if (query.isSuccess) {
    return <>{children(query.data as T)}</>
  } 
    return <p>ERROR</p>
  
}

export default QueryLoader
