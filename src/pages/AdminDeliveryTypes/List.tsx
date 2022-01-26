import { getDeliveryTypes } from 'api'
import { DB_TABLES, DeliveryType } from 'braty-common'
import { Flexbox, QueryLoader, ResultIcon, Table, Tile } from 'components'
import { Language, useTranslation } from 'hooks'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { displayMoney, formatDate, getLanguageLabel } from 'utils'
import EditModal from './EditModal'

const List = () => {
  const { currentLanguage, t: commonT } = useTranslation('COMMON')

  const deliveryTypesQuery = useQuery(DB_TABLES.DELIVERY_TYPES, () =>
    getDeliveryTypes()
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
        Header: commonT('TABLE_HEADERS.icon_name'),
        accessor: 'icon_name' as const
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
      <QueryLoader query={deliveryTypesQuery}>
        {(data) => {
          const shappedData = shapeData(data, currentLanguage)

          return <Table columns={columns} data={shappedData} />
        }}
      </QueryLoader>
    </Tile>
  )
}

const shapeData = (data: DeliveryType[], currentLanguage: Language) =>
  data.map((record) => {
    const getIcon = (possitive: boolean | null) => (
      <Flexbox justifyContent="center">
        <ResultIcon size="2x" variant={possitive ? 'SUCCESS' : 'ERROR'} />
      </Flexbox>
    )

    const description = getLanguageLabel({
      language: currentLanguage,
      label: record,
      description: true
    })

    return {
      created_at: formatDate(record.created_at),
      updated_at: formatDate(record.updated_at),
      label: record.label_pl,
      price: displayMoney(record.price),
      description: description,
      requires_address: getIcon(record.requires_address),
      is_enabled: getIcon(record.is_enabled),
      icon_name: record.icon_name ?? '-',
      edit: <EditModal id={record.id} is_enabled={record.is_enabled || false} />
    }
  })

export default List
