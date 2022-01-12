import { getMarketings } from 'api'
import { DB_TABLES, Marketing } from 'braty-common'
import { QueryLoader, Table } from 'components'
import { useTranslation } from 'hooks'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { formatDate } from 'utils'
import EditModal from './EditModal'

const List = () => {
  const { t: commonT } = useTranslation('COMMON')

  const marketingQuery = useQuery(DB_TABLES.MARKETING, getMarketings)
  const columns = useMemo(
    () => [
      {
        Header: commonT('TABLE_HEADERS.id'),
        accessor: 'id' as const
      },
      {
        Header: commonT('TABLE_HEADERS.updated_at'),
        accessor: 'updated_at' as const
      },
      {
        Header: commonT('TABLE_HEADERS.email'),
        accessor: 'email' as const
      },
      {
        Header: commonT('TABLE_HEADERS.phone'),
        accessor: 'phone' as const
      },
      {
        Header: commonT('TABLE_HEADERS.notes'),
        accessor: 'notes' as const
      },
      {
        Header: commonT('TABLE_HEADERS.edit'),
        accessor: 'edit' as const
      }
    ],
    []
  )

  return (
    <QueryLoader query={marketingQuery}>
      {(data) => {
        const shappedData = shapeData(data)

        return <Table columns={columns} data={shappedData} />
      }}
    </QueryLoader>
  )
}

const shapeData = (data: Marketing[]) =>
  data.map((record) => ({
    id: formatDate(record.created_at),
    updated_at: formatDate(record.updated_at),
    email: record.email,
    phone: record.phone,
    notes: record.notes,
    edit: (
      <EditModal
        email={record.email}
        id={record.id}
        notes={record.notes}
        phone={record.phone}
      />
    )
  }))

export default List
