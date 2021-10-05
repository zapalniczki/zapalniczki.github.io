import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetPaymentTypes } from 'api'
import {
  Banner,
  Flexbox,
  Heading,
  Page,
  QueryLoader,
  Table,
  Tile
} from 'components'
import { useDocumentTitle, useScrollTop, useTranslation } from 'hooks'
import { PaymentType } from 'models'
import React, { useMemo } from 'react'
import { displayDate, displayMoney } from 'utils'

const AdminPaymentTypes = () => {
  const { t } = useTranslation('ADMIN_PAYMENT_TYPES')

  useScrollTop()
  useDocumentTitle(t('title'))

  const callbacksQuery = useGetPaymentTypes()
  const columns = useMemo(
    () => [
      {
        Header: t('HEADERS.label'),
        accessor: 'label' as const
      },
      {
        Header: t('HEADERS.created_at'),
        accessor: 'created_at' as const
      },
      {
        Header: t('HEADERS.updated_at'),
        accessor: 'updated_at' as const
      },
      {
        Header: t('HEADERS.price'),
        accessor: 'price' as const
      },
      {
        Header: t('HEADERS.time'),
        accessor: 'time' as const
      },
      {
        Header: t('HEADERS.is_enabled'),
        accessor: 'is_enabled' as const
      }
    ],
    []
  )

  return (
    <Page>
      <Banner
        horizonal
        marginBottom="xxl-size"
        small
        title={<Heading level={4}>{t('title')}</Heading>}
      />

      <Tile>
        <QueryLoader query={callbacksQuery}>
          {(data) => {
            const shappedData = shapeData(data)
            return <Table columns={columns} data={shappedData} />
          }}
        </QueryLoader>
      </Tile>
    </Page>
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
      frontend_icon_name: record.frontend_icon_name ?? '-'
    }
  })

export default AdminPaymentTypes
