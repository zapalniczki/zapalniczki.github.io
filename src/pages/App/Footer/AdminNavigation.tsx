import { getOrdersCount } from 'api'
import { DB_TABLES } from 'braty-common'
import { Box, Flexbox } from '@zapalniczki/shared-components'

import { Badge, Link, QueryLoader } from 'components'
import { useAdmin, useBreakpoints, useTest, useTranslation } from 'hooks'
import { routes } from 'pages'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { handleRoutes } from 'utils'

const AdminNavigation = () => {
  const { t: commonT } = useTranslation('COMMON')
  const remoteConfig = useContext(remoteConfigContext)

  const isAdmin = useAdmin()
  const isTest = useTest()
  const isMobile = useBreakpoints('mobile')

  const params = {
    status: 'OPEN' as const,
    is_test: isTest
  }
  const orderCountQuery = useQuery([`${DB_TABLES.ORDER}_count`, params], () =>
    getOrdersCount(params)
  )

  if (!isAdmin) {
    return null
  }

  return (
    <QueryLoader query={orderCountQuery}>
      {(count) => (
        <Flexbox
          alignItems={['unset', 'flex-start', 'flex-start', 'flex-end']}
          as="ul"
          flexDirection="column"
          margin="0"
          marginTop={['unset', 'm-size', 'm-size', 'unset']}
          padding="0"
        >
          {handleRoutes(routes, remoteConfig, 'FOOTER_ADMIN').map((route) => {
            if (route.key === 'adminOrders') {
              return (
                <Badge
                  count={count}
                  key={route.path}
                  right={isMobile ? undefined : -50}
                >
                  <Box as="li" display="inline-block" marginY="xxs-size">
                    <Link
                      label={commonT(`LINKS.${route.key}`)}
                      to={route.path}
                    />
                  </Box>
                </Badge>
              )
            }

            return (
              <Box
                as="li"
                display="inline-block"
                key={route.path}
                marginY="xxs-size"
              >
                <Link label={commonT(`LINKS.${route.key}`)} to={route.path} />
              </Box>
            )
          })}
        </Flexbox>
      )}
    </QueryLoader>
  )
}

export default AdminNavigation
