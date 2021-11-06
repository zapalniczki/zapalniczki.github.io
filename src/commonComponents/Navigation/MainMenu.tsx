import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Box, Flexbox, NavigationLink } from 'components'
import { useBreakpoints, useTranslation } from 'hooks'
import { routes } from 'pages'
import React from 'react'
import { matchPath, useLocation } from 'react-router-dom'

const MainMenu = () => {
  const commonT = useTranslation('COMMON').withBase('LINKS')
  const { pathname } = useLocation()

  const isDesktop = useBreakpoints('desktop')

  if (!isDesktop) {
    return null
  }

  return (
    <Flexbox as="ul" flexGrow={1} marginX="m-size" marginY="0" paddingLeft={0}>
      {routes
        .filter((route) => route.order)
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
                icon={route.icon as IconName}
                label={commonT(route.translationKey)}
                to={route.path}
              />
            </Box>
          )
        })}
    </Flexbox>
  )
}

export default MainMenu
