import { useGetPaymentTypes } from 'api'
import { Flexbox, QueryLoader, ResultIcon, Table, Tile } from 'components'
import { useTranslation } from 'hooks'
import { PaymentType } from 'models'
import EditModal from './EditModal'
import React, { useMemo } from 'react'
import { displayDate, displayMoney } from 'utils'

const List = () => {
  const { t: commonT } = useTranslation('COMMON')

  const callbacksQuery = useGetPaymentTypes()
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

const shapeData = (data: PaymentType[]) =>
  data.map((record) => ({
    created_at: displayDate(record.created_at),
    updated_at: displayDate(record.updated_at),
    label: record.label,
    price: displayMoney(record.price),
    time: record.time,
    is_enabled: (
      <Flexbox justifyContent="center">
        <ResultIcon
          size="2x"
          variant={record.is_enabled ? 'SUCCESS' : 'ERROR'}
        />
      </Flexbox>
    ),
    frontend_icon_name: record.frontend_icon_name ?? '-',
    edit: <EditModal id={record.id} is_enabled={record.is_enabled ?? false} />
  }))

export default List
