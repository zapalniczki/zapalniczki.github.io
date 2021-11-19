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
import { DOCUMENTS } from 'constants/routes'
import { useAdmin, useTranslation } from 'hooks'
import { routes } from 'pages'
import { remoteConfigContext } from 'providers'

import React, { useContext } from 'react'

const Footer = () => {
  const { t: commonT } = useTranslation('COMMON')
  const isAdmin = useAdmin()
  const { christmas2021 } = useContext(remoteConfigContext)

  return (
    <Flexbox
      alignItems="center"
      backgroundColor="off-white"
      flexDirection="column"
      paddingY="l-size"
    >
      <MaxWidth
        alignItems="flex-start"
        flexDirection="column"
        innerPadding
        // padding={['unset', 'm-size', 'm-size', 'l-size']}
      >
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
            {routes
              .filter((route) => route.order)
              .filter((route) => {
                if (route.translationKey === 'christmas2021') {
                  if (christmas2021) {
                    return true
                  }

                  return false
                }

                return true
              })
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
                    to={route.path}
                  />
                </Box>
              ))}
          </Flexbox>

          {isAdmin && (
            <Flexbox
              alignItems={['unset', 'flex-start', 'flex-start', 'flex-end']}
              as="ul"
              flexDirection="column"
              margin="0"
              marginTop={['unset', 'm-size', 'm-size', 'unset']}
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

        <Flexbox
          flexDirection={['unset', 'column-reverse', 'column-reverse', 'row']}
          justifyContent="space-between"
          width="100%"
        >
          <Flexbox alignItems="center" height="100%">
            <Flexbox
              alignItems="center"
              height="2rem"
              marginTop={['unset', 's-size', 's-size', 'unset']}
            >
              <Image
                height={20}
                src="https://github.com/zapalniczki/zapalniczki.github.io/actions/workflows/gh.yaml/badge.svg"
                width={105}
              />

              <Text marginLeft="m-size" type="caption">
                {process.env.VERSION}
              </Text>
            </Flexbox>
          </Flexbox>

          <Text
            marginTop={['unset', 's-size', 's-size', 'unset']}
            type="caption"
          >
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
