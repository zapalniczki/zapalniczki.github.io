import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetDeliveryTypes } from 'api'
import {
  Banner,
  Flexbox,
  Heading,
  Page,
  QueryLoader,
  Table,
  Tile
} from 'components'
import { useTranslation } from 'hooks'
import { DeliveryType } from 'models'
import React, { useMemo } from 'react'
import { displayDate, displayMoney } from 'utils'

const AdminDeliveryTypes = () => {
  const { t } = useTranslation('ADMIN_DELIVERY_TYPES')

  const callbacksQuery = useGetDeliveryTypes()
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
        Header: t('HEADERS.frontend_icon_name'),
        accessor: 'frontend_icon_name' as const
      },
      {
        Header: t('HEADERS.requires_address'),
        accessor: 'requires_address' as const
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

const shapeData = (data: DeliveryType[]) =>
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
      requires_address: (
        <Flexbox justifyContent="center">
          <FontAwesomeIcon
            {...(record.requires_address ? possitiveProps : negativeProps)}
          />
        </Flexbox>
      ),
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

export default AdminDeliveryTypes
