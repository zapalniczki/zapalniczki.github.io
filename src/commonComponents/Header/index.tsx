import { ROUTES } from 'braty-common'
import { TOP_BAR_HEIGHT } from 'commonComponents'
import { Link, Logo, MaxWidth } from 'components'
import { useTranslation } from 'hooks'
import { togglesContext } from 'providers'
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import getSpace from 'styles/getSpace'
import Main from './Main'
import Navigation from './Navigation'

const Header = () => {
  const { basketOpen, hamburgerOpen, isHeaderExpanded, setIsHeaderExpanded } =
    useContext(togglesContext)

  const { t: commonT } = useTranslation('COMMON')

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
        <Link title={commonT('LINKS.home')} to={ROUTES.HOME}>
          <Logo expanded={isHeaderExpanded} />
        </Link>

        <Main />

        <Navigation />
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
