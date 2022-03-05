import { getCallbacks } from 'api'
import { Callback, DB_TABLES } from 'braty-common'
import { QueryLoader, ResultIcon, Table, Tile } from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

import { useTranslation } from 'hooks'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { formatDate } from 'utils'
import EditModal from './EditModal'

const List = () => {
  const { t: commonT } = useTranslation('COMMON')

  const callbacksQuery = useQuery(DB_TABLES.CALLBACK, getCallbacks)
  const columns = useMemo(
    () => [
      {
        Header: commonT('TABLE_HEADERS.created_at'),
        accessor: 'created_at' as const
      },
      {
        Header: commonT('TABLE_HEADERS.updated_at'),
        accessor: 'updated_at' as const
      },
      {
        Header: commonT('TABLE_HEADERS.phone_number'),
        accessor: 'phone_number' as const
      },
      {
        Header: commonT('TABLE_HEADERS.done'),
        accessor: 'done' as const
      },
      {
        Header: commonT('TABLE_HEADERS.edit'),
        accessor: 'edit' as const
      }
    ],
    []
  )

  return (
    <Tile>
      <QueryLoader query={callbacksQuery}>
        {(callbacks) => {
          const shappedData = shapeData(callbacks)

          return <Table columns={columns} data={shappedData} />
        }}
      </QueryLoader>
    </Tile>
  )
}

const shapeData = (callbacks: Callback[]) =>
  callbacks.map((callback) => ({
    created_at: formatDate(callback.created_at),
    updated_at: formatDate(callback.updated_at),
    phone_number: callback.phone_number,
    done: (
      <Flexbox justifyContent="center">
        <ResultIcon size="2x" variant={callback.done ? 'SUCCESS' : 'ERROR'} />
      </Flexbox>
    ),
    edit: <EditModal done={callback.done ?? false} id={callback.id} />
  }))

export default List
