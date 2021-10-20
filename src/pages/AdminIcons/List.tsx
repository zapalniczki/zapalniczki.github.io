import { getIcons } from 'api'
import { QueryLoader, Table, Tile } from 'components'
import { ICONS_TABLE } from 'constants/db_tables'
import { useTranslation } from 'hooks'
import { Icon } from 'models'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { formatDate } from 'utils'

const List = () => {
  const { t: commonT } = useTranslation('COMMON')

  const iconsQuery = useQuery(ICONS_TABLE, getIcons)
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

const shapeData = (data: Icon[]) =>
  data.map((record) => ({
    created_at: formatDate(record.created_at),
    updated_at: formatDate(record.updated_at),
    label: record.label
  }))

export default List
