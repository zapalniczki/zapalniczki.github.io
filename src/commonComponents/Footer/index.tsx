import { ROUTES, BRATY_WEBSITE_WORKFLOW_BADGE, BRATY_NAME } from 'braty-common'
import {
  Box,
  Flexbox,
  Image,
  Link,
  Logo,
  MaxWidth,
  Separator,
  Text
} from 'components'
import { useAdmin, useTranslation } from 'hooks'
import { routes } from 'pages'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { handleRoutes } from 'utils'
import AdminNavigation from './AdminNavigation'

const Footer = () => {
  const { t: commonT } = useTranslation('COMMON')
  const isAdmin = useAdmin()
  const remoteConfig = useContext(remoteConfigContext)

  return (
    <Flexbox
      alignItems="center"
      backgroundColor="banner-color"
      flexDirection="column"
      paddingY="l-size"
    >
      <MaxWidth alignItems="flex-start" flexDirection="column" innerPadding>
        <Logo />

        <Flexbox
          flexDirection={['unset', 'column', 'column', 'row']}
          justifyContent="space-between"
          marginTop="l-size"
          width="100%"
        >
          <Flexbox
            alignItems="flex-start"
            as="ul"
            flexDirection="column"
            margin="0"
            padding="0"
          >
            {handleRoutes(routes, remoteConfig, 'FOOTER').map((route) => (
              <Box
                as="li"
                display="inline-block"
                key={route.path}
                marginY="xxs-size"
              >
                <Link
                  key={route.path}
                  label={commonT(`LINKS.${route.key}`)}
                  to={route.path}
                />
              </Box>
            ))}
          </Flexbox>

          <AdminNavigation />
        </Flexbox>

        <Separator marginY="l-size" />

        <Flexbox
          alignItems="center"
          flexDirection={['unset', 'column-reverse', 'column-reverse', 'row']}
          justifyContent="space-between"
          width="100%"
        >
          <Flexbox
            alignItems="center"
            height="100%"
            marginTop={['unset', 's-size', 's-size', 'unset']}
          >
            {isAdmin && (
              <Image
                height={20}
                src={BRATY_WEBSITE_WORKFLOW_BADGE}
                width={105}
              />
            )}

            <Text
              marginLeft={isAdmin ? 'm-size' : 0}
              textAlign={['unset', 'center', 'left']}
              type="caption"
            >
              {process.env.VERSION}
            </Text>
          </Flexbox>

          <Text
            marginTop={['unset', 's-size', 's-size', 'unset']}
            textAlign={['unset', 'center', 'left']}
            type="caption"
          >
            {commonT('FOOTER.allRightsReserved', {
              year: new Date().getFullYear(),
              companyName: BRATY_NAME
            })}
          </Text>

          {remoteConfig.documents ? (
            <Link to={ROUTES.DOCUMENTS}>
              <Text type="caption">{commonT('LINKS.documents')}</Text>
            </Link>
          ) : (
            <span />
          )}
        </Flexbox>
      </MaxWidth>
    </Flexbox>
  )
}

export default Footer
