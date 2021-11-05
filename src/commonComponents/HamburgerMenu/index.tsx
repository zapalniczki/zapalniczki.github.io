import { Flexbox, Box, NavigationLink } from 'components'
import { useTranslation } from 'hooks'
import { routes } from 'pages'
import { togglesContext } from 'providers'
import React, { useContext } from 'react'
import { matchPath, useLocation } from 'react-router'
import Header from './Header'

const HamburgerMenu = () => {
  const commonT = useTranslation('COMMON').withBase('LINKS')
  const { hamburgerOpen } = useContext(togglesContext)

  const { pathname } = useLocation()

  if (!hamburgerOpen) {
    return null
  }

  return (
    <Flexbox
      backgroundColor="white"
      flexDirection="column"
      height="100vh"
      position="fixed"
      right="0"
      top="0"
      width="100vw"
      zIndex={70}
    >
      <Header />

      {routes
        .filter((route) => route.order)
        .filter((route) => route.translationKey)
        .sort((prev, next) =>
          (prev?.order || 1) < (next?.order || 1) ? -1 : 1
        )
        .map((route) => {
          const isActive = !!matchPath(pathname, {
            path: route.path,
            exact: route.exact
          })

          if (!route.translationKey) {
            return null
          }

          return (
            <Box as="li" display="inline-block" key={route.path}>
              <NavigationLink
                active={isActive}
                label={commonT(route.translationKey)}
                to={route.path}
              />
            </Box>
          )
        })}
    </Flexbox>
  )
}

export default HamburgerMenu
