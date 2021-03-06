import { ROUTES } from 'braty-common'
import { Box } from '@zapalniczki/shared-components'

import { Link, Logo, MaxWidth } from 'components'
import { useBreakpoints, useTranslation } from 'hooks'
import { remoteConfigContext, togglesContext } from 'providers'
import React, { useContext, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { getColor, getSpace } from 'styles'
import { TOP_BAR_HEIGHT } from '../TopBar'
import Main from './Main'
import Navigation from './Navigation'
import BasketToggle from './toggles/BasketToggle'
import HamburgerToggle from './toggles/HamburgerToggle'
import LanguageToggle from './toggles/LanguageToggle'
import SignoutToggle from './toggles/SignoutToggle'

const Header = () => {
  const { i18n } = useContext(remoteConfigContext)
  const { basketOpen, hamburgerOpen, isHeaderExpanded, setIsHeaderExpanded } =
    useContext(togglesContext)

  const { t: commonT } = useTranslation('COMMON')
  const { space } = useTheme()
  const isAboveDesktop = useBreakpoints('desktop max')

  useEffect(() => {
    const scrollHandler = () => {
      if (window.pageYOffset >= 5) {
        setIsHeaderExpanded(true)
      } else {
        setIsHeaderExpanded(false)
      }
    }

    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  useEffect(() => {
    if (basketOpen || hamburgerOpen) {
      setIsHeaderExpanded(true)
    }
  }, [basketOpen, hamburgerOpen])

  return (
    <Container isExpanded={isHeaderExpanded}>
      <MaxWidth
        alignItems="center"
        flexDirection="row"
        innerPadding
        justifyContent="space-between"
      >
        <Navigation marginLeft={isAboveDesktop ? 0 : `-${space['s-size']}`}>
          <Box as="li" margin={0} padding={0}>
            <HamburgerToggle />
          </Box>
        </Navigation>

        <Box marginRight="auto">
          <Link title={commonT('LINKS.home')} to={ROUTES.HOME}>
            <Logo
              expanded={isHeaderExpanded}
              marginLeft={isAboveDesktop ? `-${space['xs-size']}` : 0}
            />
          </Link>
        </Box>

        <Main />

        <Navigation marginRight={isAboveDesktop ? 0 : `-${space['s-size']}`}>
          {i18n && (
            <Box as="li" margin={0} padding={0}>
              <LanguageToggle />
            </Box>
          )}

          <Box as="li" margin={0} padding={0}>
            <BasketToggle />
          </Box>

          <Box as="li" margin={0} padding={0}>
            <SignoutToggle />
          </Box>
        </Navigation>
      </MaxWidth>
    </Container>
  )
}

type ContainerProps = {
  isExpanded: boolean
}

const Container = styled.nav<ContainerProps>`
  width: 100%;
  background: ${(props) => {
    if (props.isExpanded) {
      return getColor('white')(props)
    }

    return undefined
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) =>
    `${getSpace(props.isExpanded ? 'xxs-size' : 'm-size')(props)} 0`};

  position: ${(props) => (props.isExpanded ? 'fixed' : 'absolute')};
  top: ${(props) => (props.isExpanded ? 0 : TOP_BAR_HEIGHT)};
  transform: translateY(0);
  z-index: ${(props) => props.theme.zIndices.navigation};
  box-shadow: ${(props) =>
    props.isExpanded &&
    '0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);'};
`

export default Header
