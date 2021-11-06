import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, Logo, MaxWidth } from 'components'
import { HOME } from 'constants/routes'
import MainMenu from './MainMenu'
import getColor from 'styles/getColor'
import { useTranslation } from 'hooks'
import getSpace from 'styles/getSpace'
import NavigationMenu from './NavigationMenu'
import { togglesContext } from 'providers'
import { changeColorAlpha } from 'utils'

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { basketOpen } = useContext(togglesContext)

  const { t: commonT } = useTranslation('COMMON')

  useEffect(() => {
    const scrollHandler = () => {
      if (window.pageYOffset >= 5) {
        setIsExpanded(true)
      } else {
        setIsExpanded(false)
      }
    }

    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  useEffect(() => {
    if (basketOpen) {
      setIsExpanded(true)
    }
  }, [basketOpen])

  return (
    <Container isExpanded={isExpanded}>
      <MaxWidth
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Link title={commonT('LINKS.home')} to={HOME}>
          <Logo expanded={isExpanded} />
        </Link>

        <MainMenu />

        <NavigationMenu />
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
      return getColor('nav-bg-scrolled')(props)
    }

    return undefined
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => {
    if (props.isExpanded) {
      return `${getSpace('xxs-size')(props)} 0`
    }

    return `${getSpace('l-size')(props)} 0`
  }};

  position: ${(props) => (props.isExpanded ? 'fixed' : 'absolute')};
  top: 0;
  transform: translateY(0);
  z-index: ${(props) => props.theme.zIndices.navigation};
  box-shadow: ${(props) =>
    props.isExpanded && '0 5px 10px rgba(0, 0, 0, 0.02)'};

  border: ${(props) =>
    props.isExpanded
      ? `${changeColorAlpha(getColor('black')(props), 0.1)}`
      : 'none'};
`

export default Navigation
