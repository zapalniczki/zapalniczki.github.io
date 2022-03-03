import { Box } from 'components'
import React, { ReactNode, ElementType } from 'react'
import { useTheme } from 'styled-components'
import { SpaceProps, TypographyProps } from 'styled-system'
import { Color } from 'styles'

type Props = {
  as?: ElementType
  children: ReactNode
  color?: Color
  level: 1 | 2 | 3 | 4 | 5 | 6
} & SpaceProps &
  TypographyProps

const Heading = ({ as, children, color, level, ...props }: Props) => {
  const { fontSizes, fontWeigths, letterSpacings } = useTheme()

  let fontSize: string, fontWeight: string, letterSpacing: string
  switch (level) {
    case 1:
      fontSize = fontSizes['new-huge-s-size']
      fontWeight = fontWeigths['light']
      letterSpacing = letterSpacings[100]
      break

    case 2:
      fontSize = fontSizes['new-large-l-size']
      fontWeight = fontWeigths['light']
      letterSpacing = letterSpacings[200]
      break

    case 3:
      fontSize = fontSizes['new-large-m-size']
      fontWeight = fontWeigths['regular']
      letterSpacing = letterSpacings[300]
      break

    case 4:
      fontSize = fontSizes['new-large-s-size']
      fontWeight = fontWeigths['regular']
      letterSpacing = letterSpacings[600]
      break

    case 5:
      fontSize = fontSizes['new-medium-l-size']
      fontWeight = fontWeigths['regular']
      letterSpacing = letterSpacings[300]
      break

    case 6:
      fontSize = fontSizes['new-medium-m-size']
      fontWeight = fontWeigths['medium']
      letterSpacing = letterSpacings[500]
      break
  }

  return (
    <Box
      as={as ?? `h${level}`}
      color={color ?? 'heading-color'}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      margin="0"
      {...props}
    >
      {children}
    </Box>
  )
}

export default Heading
