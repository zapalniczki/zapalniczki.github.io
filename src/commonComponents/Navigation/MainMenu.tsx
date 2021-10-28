import { Box, Flexbox, Link } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { matchPath, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import { routes } from 'pages'
import getSpace from 'styles/getSpace'

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
        .map((route) => {
          const isActive = !!matchPath(pathname, {
            path: route.path,
            exact: route.exact
          })

          return (
            <Box as="li" display="inline-block" key={route.path}>
              <StyledLink
                active={isActive}
                label={t(`LINKS.${route.translationKey}`)}
                to={route.path}
              />
            </Box>
          )
        })}
    </Flexbox>
  )
}

const StyledLink = styled(Link)`
  padding: ${(props) =>
    `${getSpace('xs-size')(props)} ${getSpace('m-size')(props)}`};

  &:hover {
    background: ${getColor('background-color-01')};
  }
`

export default MainMenu
