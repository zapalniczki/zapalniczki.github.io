import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Box, Flexbox, NavigationLink } from 'components'
import { useBreakpoints, useTranslation } from 'hooks'
import { routes } from 'pages'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { matchPath, useLocation } from 'react-router-dom'
import { handleRoutes } from 'utils'

const Main = () => {
  const remoteConfig = useContext(remoteConfigContext)
  const commonT = useTranslation('COMMON').withBase('LINKS')
  const { pathname } = useLocation()

  const isAboveDesktop = useBreakpoints('desktop max')

  if (!isAboveDesktop) {
    return null
  }

  return (
    <Flexbox as="ul" flexGrow={1} marginX="m-size" marginY="0" paddingLeft={0}>
      {handleRoutes(routes, remoteConfig, 'MENU').map(
        ({ end, icon, key, path }) => {
          const isActive = !!matchPath({ path, end }, pathname)

          if (!key) {
            return null
          }

          return (
            <Box as="li" display="inline-block" key={path}>
              <NavigationLink
                active={isActive}
                icon={icon as IconName}
                label={commonT(key)}
                to={path}
              />
            </Box>
          )
        }
      )}
    </Flexbox>
  )
}

export default Main
