import { Payload as GetMoldsPayload, useGetMolds } from 'api'
import { Heading, QueryLoader, Table, Tile } from 'components'
import { TranslateFunc, useTranslation } from 'hooks'
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
        Header: commonT('TABLE_HEADERS.label'),
        accessor: 'label' as const
      },
      {
        Header: commonT('TABLE_HEADERS.icon'),
        accessor: 'icon' as const
      },
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
          const shappedData = shapeData(users, commonT)

          return <Table columns={columns} data={shappedData} />
        }}
      </QueryLoader>
    </Tile>
  )
}

const shapeData = (data: GetMoldsPayload[], t: TranslateFunc) =>
  data.map((record) => ({
    created_at: displayDate(record.created_at),
    updated_at: displayDate(record.updated_at),
    status: record.status ? t(`MOLD_STATUSES.${record.status}`) : '-',
    label: record.label.label,
    icon: record.icon.label,
    edit: <EditModal id={record.id} status={record.status ?? 'IN_PROGRESS'} />
  }))

export default List
