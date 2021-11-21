import { ErrorFetchingMessage, Flexbox } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'
import { ReactElement } from 'react'
import { ReactNode } from 'react'
import { UseQueryResult } from 'react-query'

type Props<T> = {
  Loader?: ReactElement
  children: (data: T) => ReactNode
  customLoadingMessage?: string
  persistLoader?: boolean
  query: UseQueryResult<T>
  showLoading?: boolean
}

function QueryLoader<T>({
  Loader,
  children,
  customLoadingMessage,
  persistLoader,
  query,
  showLoading = true
}: Props<T>): JSX.Element | null {
  const commonT = useTranslation('COMMON').withBase('QUERY_LOADER')

  if (persistLoader || query.isFetching) {
    if (Loader) {
      return Loader
    }

    if (showLoading) {
      return <p>{customLoadingMessage || commonT('loading')}</p>
    }

    return null
  } else if (query.isSuccess) {
    return <>{children(query.data as T)}</>
  }

  return (
    <Flexbox minHeight="8.6rem" position="relative" width="100%">
      {Loader && Loader}

      <ErrorFetchingMessage refetch={query.refetch} />
    </Flexbox>
  )
}

export default QueryLoader
