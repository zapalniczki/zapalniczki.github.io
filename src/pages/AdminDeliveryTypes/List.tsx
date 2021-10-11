import { useGetDeliveryTypes } from 'api'
import { Flexbox, QueryLoader, ResultIcon, Table, Tile } from 'components'
import { DeliveryType } from 'models'
import React, { useMemo } from 'react'
import { useTranslation } from 'hooks'
import { formatDate, displayMoney } from 'utils'
import EditModal from './EditModal'

const List = () => {
  const { t: commonT } = useTranslation('COMMON')

  const callbacksQuery = useGetDeliveryTypes()
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
      },
      {
        Header: commonT('TABLE_HEADERS.price'),
        accessor: 'price' as const
      },
      {
        Header: commonT('TABLE_HEADERS.time'),
        accessor: 'time' as const
      },
      {
        Header: commonT('TABLE_HEADERS.frontend_icon_name'),
        accessor: 'frontend_icon_name' as const
      },
      {
        Header: commonT('TABLE_HEADERS.requires_address'),
        accessor: 'requires_address' as const
      },
      {
        Header: commonT('TABLE_HEADERS.is_enabled'),
        accessor: 'is_enabled' as const
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
        {(data) => {
          const shappedData = shapeData(data)

          return <Table columns={columns} data={shappedData} />
        }}
      </QueryLoader>
    </Tile>
  )
}

const shapeData = (data: DeliveryType[]) =>
  data.map((record) => {
    const getIcon = (possitive: boolean | null) => (
      <Flexbox justifyContent="center">
        <ResultIcon size="2x" variant={possitive ? 'SUCCESS' : 'ERROR'} />
      </Flexbox>
    )

    return {
      created_at: formatDate(record.created_at),
      updated_at: formatDate(record.updated_at),
      label: record.label,
      price: displayMoney(record.price),
      time: record.time,
      requires_address: getIcon(record.requires_address),
      is_enabled: getIcon(record.is_enabled),
      frontend_icon_name: record.frontend_icon_name ?? '-',
      edit: <EditModal id={record.id} is_enabled={record.is_enabled || false} />
    }
  })

export default List
