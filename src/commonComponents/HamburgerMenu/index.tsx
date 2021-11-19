import { Flexbox, Box, NavigationLink } from 'components'
import { useTranslation } from 'hooks'
import { routes } from 'pages'
import { togglesContext } from 'providers'
import React, { useContext } from 'react'
import { matchPath, useLocation } from 'react-router'
import Header from './Header'
import { motion, AnimatePresence } from 'framer-motion'

const HamburgerMenu = () => {
  const commonT = useTranslation('COMMON').withBase('LINKS')
  const { closeHamburger, hamburgerOpen } = useContext(togglesContext)

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
                  onClick={closeHamburger}
                  to={route.path}
                />
              </Box>
            )
          })}
      </MotionFlexbox>
    </AnimatePresence>
  )
}

const MotionFlexbox = motion(Flexbox)

export default HamburgerMenu
