import { getPaymentTypes } from 'api'
import { Flexbox, QueryLoader, ResultIcon, Table, Tile } from 'components'
import { useTranslation } from 'hooks'
import { PaymentType } from 'models'
import EditModal from './EditModal'
import React, { useMemo } from 'react'
import { formatDate, displayMoney } from 'utils'
import { useQuery } from 'react-query'
import { PAYMENT_TYPE_TABLE } from 'constants/db_tables'

const List = () => {
  const { t: commonT } = useTranslation('COMMON')

  const params = {}
  const paymentTypesQuery = useQuery([PAYMENT_TYPE_TABLE, params], () =>
    getPaymentTypes(params)
  )
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
      <QueryLoader query={paymentTypesQuery}>
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
    created_at: formatDate(record.created_at),
    updated_at: formatDate(record.updated_at),
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
