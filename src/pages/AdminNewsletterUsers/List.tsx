import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetNewsletterUsers } from 'api'
import { Flexbox, Heading, QueryLoader, Table, Tile } from 'components'
import { useTranslation } from 'hooks'
import { Newsletter } from 'models'
import React, { useMemo } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import { displayDate } from 'utils'
import EditModal from './EditModal'

const List = () => {
  const { t } = useTranslation('ADMIN_MOLDS')
  const { t: commonT } = useTranslation('COMMON')

  const { colors } = useTheme()
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
          const shappedData = shapeData(users, colors)

          return <Table columns={columns} data={shappedData} />
        }}
      </QueryLoader>
    </Tile>
  )
}

const shapeData = (data: Newsletter[], colors: DefaultTheme['colors']) =>
  data.map((record) => {
    const icon: IconName = record.consent ? 'check-circle' : 'times-circle'
    const iconColor =
      colors[record.consent ? ('green' as const) : ('red' as const)]

    return {
      email: record.email,
      created_at: displayDate(record.created_at),
      updated_at: displayDate(record.updated_at),
      consent: (
        <Flexbox justifyContent="center">
          <FontAwesomeIcon color={iconColor} icon={icon} />
        </Flexbox>
      ),
      edit: <EditModal consent={record.consent} id={record.id} />
    }
  })

export default List
