import { getMarketings } from 'api'
import { DB_TABLES, Marketing } from 'braty-common'
import { Flexbox, QueryLoader, ResultIcon, Table } from 'components'
import { useTranslation } from 'hooks'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { formatDate } from 'utils'
import FormModal from './FormModal'
import RemoveModal from './RemoveModal'

type Props = {
  testDataEnabled: boolean
}

const List = ({ testDataEnabled }: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  const params = { is_test: testDataEnabled }
  const marketingQuery = useQuery([DB_TABLES.MARKETING, params], () =>
    getMarketings(params)
  )
  const columns = useMemo(
    () => [
      {
        Header: commonT('TABLE_HEADERS.created_at'),
        accessor: 'created_at' as const
      },
      {
        Header: commonT('TABLE_HEADERS.updated_at'),
        accessor: 'updated_at' as const
      },
      {
        Header: commonT('TABLE_HEADERS.name'),
        accessor: 'name' as const
      },
      {
        Header: commonT('TABLE_HEADERS.plus_code'),
        accessor: 'plus_code' as const
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
        Header: commonT('TABLE_HEADERS.sendBrochureAgreement'),
        accessor: 'sendBrochureAgreement' as const
      },
      {
        Header: commonT('TABLE_HEADERS.sendBrochureCyclicAgreement'),
        accessor: 'sendBrochureCyclicAgreement' as const
      },
      {
        Header: commonT('TABLE_HEADERS.edit'),
        accessor: 'edit' as const
      },
      {
        Header: commonT('TABLE_HEADERS.delete'),
        accessor: 'delete' as const
      }
    ],
    []
  )

  return (
    <QueryLoader query={marketingQuery}>
      {(data) => {
        const shappedData = shapeData(data)

        return <Table columns={columns} data={shappedData} />
      }}
    </QueryLoader>
  )
}

const shapeData = (data: Marketing[]) =>
  data.map((record) => ({
    created_at: formatDate(record.created_at),
    updated_at: formatDate(record.updated_at),
    name: record.name,
    plus_code: record.plus_code,
    email: record.email,
    phone: record.phone,
    notes: record.notes,
    sendBrochureAgreement: (
      <Flexbox justifyContent="center">
        <ResultIcon
          size="2x"
          variant={record.send_brochure_agreement ? 'SUCCESS' : 'ERROR'}
        />
      </Flexbox>
    ),
    sendBrochureCyclicAgreement: (
      <Flexbox justifyContent="center">
        <ResultIcon
          size="2x"
          variant={record.send_brochure_cyclic_agreement ? 'SUCCESS' : 'ERROR'}
        />
      </Flexbox>
    ),
    edit: (
      <FormModal
        email={record.email}
        id={record.id}
        name={record.name}
        notes={record.notes}
        phone={record.phone}
        plus_code={record.plus_code}
        send_brochure_agreement={record.send_brochure_agreement}
        send_brochure_cyclic_agreement={record.send_brochure_cyclic_agreement}
        status={record.status}
      />
    ),
    delete: <RemoveModal id={record.id} />
  }))

export default List
