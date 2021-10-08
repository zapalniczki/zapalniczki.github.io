import { useGetNewsletterUsers } from 'api'
import {
  Flexbox,
  Heading,
  QueryLoader,
  ResultIcon,
  Table,
  Tile
} from 'components'
import { useTranslation } from 'hooks'
import { Newsletter } from 'models'
import React, { useMemo } from 'react'
import { displayDate } from 'utils'
import EditModal from './EditModal'

const List = () => {
  const { t } = useTranslation('ADMIN_MOLDS')
  const { t: commonT } = useTranslation('COMMON')

  const adminNewsletterUsersQuery = useGetNewsletterUsers()
  const columns = useMemo(
    () => [
      {
        Header: commonT('TABLE_HEADERS.email'),
        accessor: 'email' as const
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
        Header: commonT('TABLE_HEADERS.consent'),
        accessor: 'consent' as const
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
      <Heading level={4} marginBottom="s-size">
        {t('LIST.title')}
      </Heading>
      <QueryLoader query={adminNewsletterUsersQuery}>
        {(users) => {
          const shappedData = shapeData(users)

          return <Table columns={columns} data={shappedData} />
        }}
      </QueryLoader>
    </Tile>
  )
}

const shapeData = (data: Newsletter[]) =>
  data.map((record) => ({
    email: record.email,
    created_at: displayDate(record.created_at),
    updated_at: displayDate(record.updated_at),
    consent: (
      <Flexbox justifyContent="center">
        <ResultIcon size="2x" variant={record.consent ? 'SUCCESS' : 'ERROR'} />
      </Flexbox>
    ),
    edit: <EditModal consent={record.consent} id={record.id} />
  }))

export default List
