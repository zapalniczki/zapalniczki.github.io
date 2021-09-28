import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Logo, MaxWidth } from 'components'
import { HOME } from 'constants/routes'
import BasketToggle from './BasketToggle'
import MainMenu from './MainMenu'
import { Link } from 'react-router-dom'
import getColor from 'styles/getColor'

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      if (window.pageYOffset >= 70) {
        setIsExpanded(true)
      } else {
        setIsExpanded(false)
      }
    }

    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <Container isExpanded={isExpanded}>
      <MaxWidth alignItems="center" flexDirection="row">
        <Link to={HOME}>
          <Logo expanded={isExpanded} />
        </Link>

        <MainMenu />

        <NavigationMenu>
          <NavigationMenuItem>
            <BasketToggle />
          </NavigationMenuItem>
        </NavigationMenu>
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

    return getColor('nav-bg')(props)
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => {
    if (props.isExpanded) {
      return 0
    }

    return `${props.theme.space['l-size']} 0`
  }};

  position: ${(props) => (props.isExpanded ? 'fixed' : 'absolute')};
  top: 0;
  transform: translateY(0);
  z-index: ${(props) => props.theme.zIndices.navigation};
  box-shadow: ${(props) =>
    props.isExpanded && '0 5px 10px rgba(0, 0, 0, 0.02)'};
`

const NavigationMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
  text-align: right;
`

export const NavigationMenuItem = styled.li`
  display: inline-block;
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export default Navigation
