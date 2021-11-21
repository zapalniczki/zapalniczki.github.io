import { Box } from 'components'
import React, { ReactNode } from 'react'
import styled, { css, useTheme } from 'styled-components'
import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system'

type Props = {
  children: ReactNode
  span?: boolean
  type: Type
  white?: boolean
  wrap?: boolean
} & SpaceProps &
  TypographyProps &
  LayoutProps

const Text = ({ children, span, type, wrap = true, ...props }: Props) => {
  const { fontSizes, fontWeigths, letterSpacings } = useTheme()

  let fontSize: string, fontWeight: string, letterSpacing: string
  switch (type) {
    case 'subtitle-1':
      fontSize = fontSizes['new-medium-s-size']
      fontWeight = fontWeigths['regular']
      letterSpacing = letterSpacings[500]
      break

    case 'subtitle-2':
      fontSize = fontSizes['new-small-l-size']
      fontWeight = fontWeigths['medium']
      letterSpacing = letterSpacings[400]
      break

    case 'body-1':
      fontSize = fontSizes['new-medium-s-size']
      fontWeight = fontWeigths['regular']
      letterSpacing = letterSpacings[800]
      break

    case 'body-2':
    default:
      fontSize = fontSizes['new-small-l-size']
      fontWeight = fontWeigths['regular']
      letterSpacing = letterSpacings[600]
      break

    case 'button':
      fontSize = fontSizes['new-small-l-size']
      fontWeight = fontWeigths['medium']
      letterSpacing = letterSpacings[900]
      break

    case 'caption':
      fontSize = fontSizes['new-small-m-size']
      fontWeight = fontWeigths['regular']
      letterSpacing = letterSpacings[700]
      break

    case 'overline':
      fontSize = fontSizes['new-small-s-size']
      fontWeight = fontWeigths['regular']
      letterSpacing = letterSpacings[1000]
      break
  }

  return (
    <Container
      $wrap={wrap}
      as={span ? 'span' : 'p'}
      color={props.white ? 'white' : 'paragraph-color'}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      lineHeight="2.4rem"
      margin={0}
      {...props}
    >
      {children}
    </Container>
  )
}

type ContainerProps = {
  $wrap: Props['wrap']
}
const Container = styled(Box)<ContainerProps>`
  ${(props) =>
    props.$wrap
      ? css`
          white-space: normal;
          white-space: pre-line;
        `
      : css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `}
`

type Type =
  | 'subtitle-1'
  | 'subtitle-2'
  | 'body-1'
  | 'body-2'
  | 'button'
  | 'caption'
  | 'overline'

export default Text
