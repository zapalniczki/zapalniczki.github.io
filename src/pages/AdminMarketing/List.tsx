import { getDeliveryTypes } from 'api'
import { DB_TABLES, DeliveryType } from 'braty-common'
import { QueryLoader, Table, Tile } from 'components'
import { useTranslation } from 'hooks'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { displayMoney, formatDate } from 'utils'

const List = () => {
  const { t: commonT } = useTranslation('COMMON')

  const deliveryTypesQuery = useQuery(
    DB_TABLES.DELIVERY_TYPES,
    getDeliveryTypes
  )
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
    <Tile>
      <QueryLoader query={deliveryTypesQuery}>
        {(data) => {
          const shappedData = shapeData(data)

          return <Table columns={columns} data={shappedData} />
        }}
      </QueryLoader>
    </Tile>
  )
}

const shapeData = (data: DeliveryType[]) =>
  data.map((record) => ({
    id: formatDate(record.created_at),
    updated_at: formatDate(record.updated_at),
    email: record.label,
    price: displayMoney(record.price),
    phone: record.time,
    notes: '',
    edit: 2
    // edit: <EditModal id={record.id} is_enabled={record.is_enabled || false} />
  }))

export default List
