import { Flexbox, Box, NavigationLink } from 'components'
import { useTranslation } from 'hooks'
import { routes } from 'pages'
import { remoteConfigContext, togglesContext } from 'providers'
import React, { useContext } from 'react'
import { matchPath, useLocation } from 'react-router'
import Header from './Header'
import { motion, AnimatePresence } from 'framer-motion'
import { handleRoutes } from 'utils'

const HamburgerMenu = () => {
  const commonT = useTranslation('COMMON').withBase('LINKS')
  const { closeHamburger, hamburgerOpen } = useContext(togglesContext)
  const remoteConfig = useContext(remoteConfigContext)

  const { pathname } = useLocation()

  if (!hamburgerOpen) {
    return null
  }

  return (
    <AnimatePresence>
      <MotionFlexbox
        animate={{ width: '100vw' }}
        backgroundColor="white"
        exit={{ width: 0 }}
        flexDirection="column"
        height="100vh"
        initial={{ width: 0 }}
        layout
        position="fixed"
        right="0"
        top="0"
        zIndex={70}
      >
        <Header />

        {handleRoutes(routes, remoteConfig, 'HAMBURGER').map(
          ({ end, path, translationKey }) => {
            const isActive = !!matchPath({ path, end }, pathname)

            if (!translationKey) {
              return null
            }

            return (
              <Box as="li" display="inline-block" key={path}>
                <NavigationLink
                  active={isActive}
                  label={commonT(translationKey)}
                  onClick={closeHamburger}
                  to={path}
                />
              </Box>
            )
          }
        )}
      </MotionFlexbox>
    </AnimatePresence>
  )
}

const MotionFlexbox = motion(Flexbox)

export default HamburgerMenu
