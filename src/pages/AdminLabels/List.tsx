import { getLabels } from 'api'
import { DB_TABLES, Label } from 'braty-common'
import { QueryLoader, Table, Tile } from 'components'
import { useTranslation } from 'hooks'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { formatDate } from 'utils'

const List = () => {
  const { t: commonT } = useTranslation('COMMON')

  const iconsQuery = useQuery(DB_TABLES.LABELS, getLabels)
  const columns = useMemo(
    () => [
      {
        Header: commonT('TABLE_HEADERS.label'),
        accessor: 'label' as const
      },
      {
        Header: commonT('TABLE_HEADERS.created_at'),
        accessor: 'created_at' as const
      },
      {
        Header: commonT('TABLE_HEADERS.updated_at'),
        accessor: 'updated_at' as const
      }
    ],
    []
  )

  return (
    <Tile>
      <QueryLoader query={iconsQuery}>
        {(data) => {
          const shappedData = shapeData(data)

          return <Table columns={columns} data={shappedData} />
        }}
      </QueryLoader>
    </Tile>
  )
}

const shapeData = (data: Label[]) =>
  data.map((record) => ({
    created_at: formatDate(record.created_at),
    updated_at: formatDate(record.updated_at),
    label: record.label_pl
  }))

export default List
