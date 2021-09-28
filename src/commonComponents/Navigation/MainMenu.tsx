import { Box, Flexbox, Link, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { matchPath, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import mainMenuLinks from './mainMenuLinks'
import getColor from 'styles/getColor'

const MainMenu = () => {
  const { t } = useTranslation('COMMON')
  const { pathname } = useLocation()

  return (
    <Flexbox as="ul" flexGrow={1} marginX="m-size" marginY="0" paddingLeft={0}>
      {mainMenuLinks.map(({ label, ...link }) => (
        <Box as="li" display="inline-block" key={link.to}>
          <StyledLink
            isActive={
              !!matchPath(pathname, { path: link.to, exact: link.exact })
            }
            {...link}
          >
            <Text fontWeight="bold" type="subtitle-2">
              {t(label)}
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
