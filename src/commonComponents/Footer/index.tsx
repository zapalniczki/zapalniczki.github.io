import {
  Box,
  Flexbox,
  ImageLoader,
  Link,
  Logo,
  MaxWidth,
  Separator,
  Text
} from 'components'
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
          <Flexbox
            alignItems="flex-start"
            as="ul"
            flexDirection="column"
            margin="0"
            padding="0"
          >
            {routes
              .filter((route) => route.order)
              .sort((prev, next) =>
                (prev?.order || 1) < (next?.order || 1) ? -1 : 1
              )
              .map((route) => (
                <Box
                  as="li"
                  display="inline-block"
                  key={route.path}
                  marginY="xxs-size"
                >
                  <Link
                    key={route.path}
                    label={commonT(`LINKS.${route.translationKey}`)}
                    // marginY="xxs-size"
                    to={route.path}
                  />
                </Box>
              ))}
          </Flexbox>

          {isAdmin && (
            <Flexbox
              alignItems="flex-end"
              as="ul"
              flexDirection="column"
              margin="0"
              padding="0"
            >
              {routes
                .filter((route) => route.admin)
                .map((route) => (
                  <Box
                    as="li"
                    display="inline-block"
                    key={route.path}
                    marginY="xxs-size"
                  >
                    <Link
                      label={commonT(`LINKS.${route.translationKey}`)}
                      to={route.path}
                    />
                  </Box>
                ))}
            </Flexbox>
          )}
        </Flexbox>

        <Separator marginY="l-size" />

        <Flexbox justifyContent="space-between" width="100%">
          <Flexbox alignItems="center" height="100%">
            <ImageLoader src="https://github.com/zapalniczki/zapalniczki.github.io/actions/workflows/gh.yaml/badge.svg" />

            <Text marginLeft="m-size" type="caption">
              {process.env.VERSION}
            </Text>
          </Flexbox>

          <Text type="caption">
            {commonT('FOOTER.allRightsReserved', {
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
