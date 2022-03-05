import { getPaymentTypes } from 'api'
import { DB_TABLES, PaymentType, Language } from 'braty-common'
import { DisplayMoney, QueryLoader, ResultIcon, Table, Tile } from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

import { useTranslation } from 'hooks'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { formatDate, getLanguageLabel, getLanguagePrice } from 'utils'
import EditModal from './EditModal'

const List = () => {
  const { language, t: commonT } = useTranslation('COMMON')

  const paymentTypesQuery = useQuery(DB_TABLES.PAYMENT_TYPE, () =>
    getPaymentTypes()
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
          const shappedData = shapeData(data, language)

          return <Table columns={columns} data={shappedData} />
        }}
      </QueryLoader>
    </Tile>
  )
}

const shapeData = (data: PaymentType[], language: Language) =>
  data.map((record) => {
    const label = getLanguageLabel({
      language,
      label: record
    })

    const description = getLanguageLabel({
      language,
      label: record,
      description: true
    })

    const price = getLanguagePrice({
      language,
      price: record
    })

    return {
      created_at: formatDate(record.created_at),
      updated_at: formatDate(record.updated_at),
      label,
      price: <DisplayMoney>{price}</DisplayMoney>,
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
