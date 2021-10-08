import { useGetMolds } from 'api'
import { Heading, QueryLoader, Table, Tile } from 'components'
import { useTranslation } from 'hooks'
import { Mold } from 'models'
import React, { useMemo } from 'react'
import { displayDate } from 'utils'
import EditModal from './EditModal'

const List = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('ADMIN_MOLDS')

  const query = useGetMolds()
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
        Header: commonT('TABLE_HEADERS.status'),
        accessor: 'status' as const
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
      <Heading level={4} marginBottom="s-size">
        {t('LIST.title')}
      </Heading>
      <QueryLoader query={query}>
        {(users) => {
          const shappedData = shapeData(users)

          return <Table columns={columns} data={shappedData} />
        }}
      </QueryLoader>
    </Tile>
  )
}

const shapeData = (data: Mold[]) =>
  data.map((record) => ({
    created_at: displayDate(record.created_at),
    updated_at: displayDate(record.updated_at),
    status: record.status ?? '-',
    edit: <EditModal id={record.id} status={record.status} />
  }))

export default List
