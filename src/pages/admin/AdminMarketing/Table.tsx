import { getMarketings } from 'api'
import { DB_TABLES, Marketing } from 'braty-common'
import { QueryLoader, ResultIcon, Table as NativeTable } from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

import { useTranslation } from 'hooks'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { formatDate } from 'utils'
import FormModal from './FormModal'
import RemoveModal from './RemoveModal'
import { AdminMarketingTableColumn } from './statusToColumns'

type Props = {
  columns: AdminMarketingTableColumn[]
  status: Marketing['status']
  testData: boolean
}

const Table = ({ columns, status, testData }: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  const params = {
    is_test: testData,
    status
  }
  const marketingQuery = useQuery([DB_TABLES.MARKETING, params], () =>
    getMarketings(params)
  )

  const columnsMemo = useMemo(
    () =>
      columns.map((column) => ({
        Header: commonT(`TABLE_HEADERS.${column}`),
        accessor: column
      })),

    []
  )

  return (
    <QueryLoader query={marketingQuery}>
      {(data) => {
        const shappedData = shapeData(data)

        return <NativeTable columns={columnsMemo} data={shappedData} />
      }}
    </QueryLoader>
  )
}

const shapeData = (
  data: Marketing[]
): Record<
  AdminMarketingTableColumn,
  string | boolean | number | JSX.Element | null
>[] =>
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
    edit: (
      <FormModal
        email={record.email}
        id={record.id}
        name={record.name}
        notes={record.notes}
        phone={record.phone}
        plus_code={record.plus_code}
        send_brochure_agreement={record.send_brochure_agreement}
        status={record.status}
      />
    ),
    delete: <RemoveModal id={record.id} />
  }))

export default Table
