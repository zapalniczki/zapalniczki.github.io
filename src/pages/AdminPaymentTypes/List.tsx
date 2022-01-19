import { getPaymentTypes } from 'api'
import { DB_TABLES, PaymentType } from 'braty-common'
import { Flexbox, QueryLoader, ResultIcon, Table, Tile } from 'components'
import { Language, useTranslation } from 'hooks'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { displayMoney, formatDate, getLanguageLabel } from 'utils'
import EditModal from './EditModal'

const List = () => {
  const { currentLanguage, t: commonT } = useTranslation('COMMON')

  const params = {}
  const paymentTypesQuery = useQuery([DB_TABLES.PAYMENT_TYPE, params], () =>
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
        Header: commonT('TABLE_HEADERS.description'),
        accessor: 'description' as const
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
          const shappedData = shapeData(data, currentLanguage)

          return <Table columns={columns} data={shappedData} />
        }}
      </QueryLoader>
    </Tile>
  )
}

const shapeData = (data: PaymentType[], currentLanguage: Language) =>
  data.map((record) => {
    const label = getLanguageLabel({
      language: currentLanguage,
      label: record
    })

    const description = getLanguageLabel({
      language: currentLanguage,
      label: record,
      description: true
    })

    return {
      created_at: formatDate(record.created_at),
      updated_at: formatDate(record.updated_at),
      label,
      price: displayMoney(record.price),
      description,
      is_enabled: (
        <Flexbox justifyContent="center">
          <ResultIcon
            size="2x"
            variant={record.is_enabled ? 'SUCCESS' : 'ERROR'}
          />
        </Flexbox>
      ),
      icon_name: record.icon_name ?? '-',
      edit: <EditModal id={record.id} is_enabled={record.is_enabled ?? false} />
    }
  })

export default List
