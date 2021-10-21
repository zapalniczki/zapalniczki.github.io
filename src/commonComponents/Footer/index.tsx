import { Box, Flexbox, Link, Logo, MaxWidth, Separator, Text } from 'components'
import { DOCUMENTS } from 'constants/routes'
import { useAdmin, useTranslation } from 'hooks'
import { routes } from 'pages'

import React from 'react'

const Footer = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { isAdmin } = useAdmin()

  return (
    <Flexbox
      alignItems="center"
      backgroundColor="off-white"
      flexDirection="column"
      paddingY="l-size"
    >
      <MaxWidth alignItems="flex-start" flexDirection="column">
        <Box marginLeft="-1rem">
          <Logo />
        </Box>

        <Flexbox justifyContent="space-between" marginTop="l-size" width="100%">
          <Flexbox alignItems="flex-start" flexDirection="column">
            {routes
              .filter((route) => route.order)
              .sort((prev, next) =>
                (prev?.order || 1) < (next?.order || 1) ? -1 : 1
              )
              .map((route) => (
                <Link key={route.path} to={route.path}>
                  <Text marginY="xs-size" type="body-1">
                    {commonT(`LINKS.${route.translationKey}`)}
                  </Text>
                </Link>
              ))}
          </Flexbox>

          {isAdmin && (
            <Flexbox alignItems="flex-end" flexDirection="column">
              {routes
                .filter((route) => route.admin)
                .map((route) => (
                  <Link key={route.path} to={route.path}>
                    <Text marginY="xs-size" type="body-1">
                      {commonT(`LINKS.${route.translationKey}`)}
                    </Text>
                  </Link>
                ))}
            </Flexbox>
          )}
        </Flexbox>

        <Separator marginY="l-size" />

        <Flexbox justifyContent="space-between" width="100%">
          <Text type="caption">
            {commonT('FOOTER.allRightsReserved', {
              version: process.env.VERSION,
              year: new Date().getFullYear()
            })}
          </Text>

          <Link to={DOCUMENTS}>
            <Text type="caption">{commonT('LINKS.documents')}</Text>
          </Link>
        </Flexbox>
      </MaxWidth>
    </Flexbox>
  )
}

export default Footer
