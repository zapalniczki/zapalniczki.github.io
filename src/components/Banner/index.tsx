import React, { ReactNode } from 'react'
import { Box, Flexbox, Text } from 'components'
import { SpaceProps } from 'styled-system'
import { Color } from 'styles/theme'

export type BasicProps = {
  background?: ReactNode
  backgroundColor?: Color
  description?: string
  title?: ReactNode
} & SpaceProps

type Props = BasicProps & {
  children?: ReactNode
  horizonal?: boolean
  medium?: boolean
  small?: boolean
}

const Banner = ({
  background,
  backgroundColor,
  children,
  description,
  horizonal,
  medium,
  small,
  title,
  ...props
}: Props) => (
  <Flexbox
    {...props}
    alignItems="center"
    backgroundColor={backgroundColor ?? 'background-color-01'}
    height={small ? '20rem' : medium ? '30rem' : '40rem'}
    justifyContent="center"
    position="relative"
  >
    <Flexbox
      alignItems="center"
      flexDirection={horizonal ? 'row' : 'column'}
      justifyContent={horizonal ? 'space-between' : 'center'}
      paddingX={horizonal ? 'xxl-size' : 0}
      width={horizonal ? '100%' : '70rem'}
      zIndex={1}
    >
      {title && title}

      {description && (
        <Text
          marginBottom="l-size"
          marginTop="m-size"
          textAlign="center"
          type="body-2"
        >
          {description}
        </Text>
      )}

      {children}
    </Flexbox>

    <Box height="100%" left="0" position="absolute" top="0" width="100%">
      {background}
    </Box>
  </Flexbox>
)

export default Banner
