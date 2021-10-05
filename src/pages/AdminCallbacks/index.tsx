import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetCallbacks } from 'api'
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
import { Callback } from 'models'
import React, { useMemo } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'
import { displayDate } from 'utils'

const AdminCallbacks = () => {
  const { t } = useTranslation('ADMIN_CALLBACKS')
  const { colors } = useTheme()

  const callbacksQuery = useGetCallbacks()
  const columns = useMemo(
    () => [
      {
        Header: t('HEADERS.created_at'),
        accessor: 'created_at' as const
      },
      {
        Header: t('HEADERS.updated_at'),
        accessor: 'updated_at' as const
      },
      {
        Header: t('HEADERS.phone_number'),
        accessor: 'phone_number' as const
      },
      {
        Header: t('HEADERS.done'),
        accessor: 'done' as const
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
          {(callbacks) => {
            const shappedData = shapeData(callbacks, colors)
            return <Table columns={columns} data={shappedData} />
          }}
        </QueryLoader>
      </Tile>
    </Page>
  )
}

const shapeData = (callbacks: Callback[], colors: DefaultTheme['colors']) =>
  callbacks.map((callback) => {
    const icon: IconName = callback.done ? 'check-circle' : 'times-circle'
    const iconColor =
      colors[callback.done ? ('green' as const) : ('red' as const)]

    return {
      created_at: displayDate(callback.created_at),
      updated_at: displayDate(callback.updated_at),
      phone_number: callback.phone_number,
      done: (
        <Flexbox justifyContent="center">
          <FontAwesomeIcon color={iconColor} icon={icon} />
        </Flexbox>
      )
    }
  })

export default AdminCallbacks
