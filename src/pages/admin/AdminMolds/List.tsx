import { getMolds } from 'api'
import { DB_TABLES } from 'braty-common'
import { Heading, QueryLoader, Table, Tile } from 'components'
import { TranslateFunc, useTranslation } from 'hooks'
import { GetMoldsResponseItem } from 'models'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { formatDate } from 'utils'
import EditModal from './EditModal'

const List = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('ADMIN_MOLDS')

  const moldsQuery = useQuery(DB_TABLES.MOLDS, getMolds)
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

      <QueryLoader query={moldsQuery}>
        {(users) => {
          const shappedData = shapeData(users, commonT)

          return <Table columns={columns} data={shappedData} />
        }}
      </QueryLoader>
    </Tile>
  )
}

const shapeData = (data: GetMoldsResponseItem[], t: TranslateFunc) =>
  data.map((record) => ({
    created_at: formatDate(record.created_at),
    updated_at: formatDate(record.updated_at),
    status: record.status ? t(`MOLD_STATUSES.${record.status}`) : '-',
    label: record.label.key,
    icon: record.icon.label_pl,
    edit: <EditModal id={record.id} status={record.status ?? 'IN_PROGRESS'} />
  }))

export default List
