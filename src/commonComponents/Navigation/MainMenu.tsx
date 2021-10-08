import { Box, Flexbox, Link, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { matchPath, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import { routes } from 'pages'

const MainMenu = () => {
  const { t } = useTranslation('COMMON')
  const { pathname } = useLocation()

  return (
    <Flexbox as="ul" flexGrow={1} marginX="m-size" marginY="0" paddingLeft={0}>
      {routes
        .filter((route) => route.order)
        .sort((prev, next) =>
          (prev?.order || 1) < (next?.order || 1) ? -1 : 1
        )
        .map((route) => (
          <Box as="li" display="inline-block" key={route.path}>
            <StyledLink
              isActive={
                !!matchPath(pathname, { path: route.path, exact: route.exact })
              }
              to={route.path}
            >
              <Text fontWeight="bold" type="subtitle-2">
                {t(`LINKS.${route.translationKey}`)}
              </Text>
            </StyledLink>
          </Box>
        ))}
    </Flexbox>
  )
}

type StyledLinkProps = {
  isActive: boolean
}

const StyledLink = styled(Link)<StyledLinkProps>`
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  padding: ${(props) =>
    `${props.theme.space['xs-size']} ${props.theme.space['m-size']}`};

  &:hover {
    background: ${getColor('background-color-01')};
  }
`

export default MainMenu
