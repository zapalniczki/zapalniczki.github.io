import { Box } from '@zapalniczki/shared-components'

import { NavigationLink, PopupPanel } from 'components'
import { useTranslation } from 'hooks'
import { routes } from 'pages'
import { remoteConfigContext, togglesContext } from 'providers'
import React, { useContext } from 'react'
import { matchPath, useLocation } from 'react-router'
import { handleRoutes } from 'utils'
import Header from './Header'

const HamburgerMenu = () => {
  const commonT = useTranslation('COMMON').withBase('LINKS')
  const { closeHamburger, hamburgerOpen } = useContext(togglesContext)
  const remoteConfig = useContext(remoteConfigContext)

  const { pathname } = useLocation()

  if (!hamburgerOpen) {
    return null
  }

  return (
    <PopupPanel opposite>
      <Header />

      {handleRoutes(routes, remoteConfig, 'HAMBURGER').map(
        ({ end, key, path }) => {
          const isActive = !!matchPath({ path, end }, pathname)

          if (!key) {
            return null
          }

          return (
            <Box as="li" display="inline-block" key={path}>
              <NavigationLink
                active={isActive}
                label={commonT(key)}
                onClick={closeHamburger}
                to={path}
              />
            </Box>
          )
        }
      )}
    </PopupPanel>
  )
}

export default HamburgerMenu
