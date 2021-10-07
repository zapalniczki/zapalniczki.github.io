import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetPaymentTypes } from 'api'
import { Flexbox, QueryLoader, Table, Tile } from 'components'
import useTranslation from 'hooks/useTranslation'
import { PaymentType } from 'models'
import EditModal from './EditModal'
import React, { useMemo } from 'react'
import { displayDate, displayMoney } from 'utils'

const List = () => {
  const { t } = useTranslation('ADMIN_PAYMENT_TYPES')

  const callbacksQuery = useGetPaymentTypes()
  const columns = useMemo(
    () => [
      {
        Header: t('LIST.HEADERS.label'),
        accessor: 'label' as const
      },
      {
        Header: t('LIST.HEADERS.created_at'),
        accessor: 'created_at' as const
      },
      {
        Header: t('LIST.HEADERS.updated_at'),
        accessor: 'updated_at' as const
      },
      {
        Header: t('LIST.HEADERS.price'),
        accessor: 'price' as const
      },
      {
        Header: t('LIST.HEADERS.time'),
        accessor: 'time' as const
      },
      {
        Header: t('LIST.HEADERS.is_enabled'),
        accessor: 'is_enabled' as const
      },
      {
        Header: t('LIST.HEADERS.edit'),
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
  data.map((record) => {
    const possitiveProps = {
      color: 'green',
      icon: 'check-circle' as const
    }

    const negativeProps = {
      color: 'red',
      icon: 'times-circle' as const
    }

    return {
      created_at: displayDate(record.created_at),
      updated_at: displayDate(record.updated_at),
      label: record.label,
      price: displayMoney(record.price),
      time: record.time,
      is_enabled: (
        <Flexbox justifyContent="center">
          <FontAwesomeIcon
            {...(record.is_enabled ? possitiveProps : negativeProps)}
          />
        </Flexbox>
      ),
      frontend_icon_name: record.frontend_icon_name ?? '-',
      edit: <EditModal id={record.id} is_enabled={record.is_enabled ?? false} />
    }
  })

export default List
