import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetNewsletterUsers } from 'api'
import { Flexbox, Heading, QueryLoader, Table, Tile } from 'components'
import { useTranslation } from 'hooks'
import { Newsletter } from 'models'
import React, { useMemo } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import { displayDate } from 'utils'

const List = () => {
  const { t } = useTranslation('ADMIN_NEWSLETTER_USERS')
  const { colors } = useTheme()
  const adminNewsletterUsersQuery = useGetNewsletterUsers()

  const columns = useMemo(
    () => [
      {
        Header: t('LIST.HEADERS.email'),
        accessor: 'email' as const
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
        Header: t('LIST.HEADERS.consent'),
        accessor: 'consent' as const
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

const shapeData = (users: Newsletter[], colors: DefaultTheme['colors']) =>
  users.map((user) => {
    const icon: IconName = user.consent ? 'check-circle' : 'times-circle'
    const iconColor =
      colors[user.consent ? ('green' as const) : ('red' as const)]

    return {
      email: user.email,
      created_at: displayDate(user.created_at),
      updated_at: displayDate(user.updated_at),
      consent: (
        <Flexbox justifyContent="center">
          <FontAwesomeIcon color={iconColor} icon={icon} />
        </Flexbox>
      ),
      edit: 'XXX'
    }
  })

export default List
