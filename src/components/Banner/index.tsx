import React, { ReactNode } from 'react'
import { Box, Flexbox, Text } from 'components'
import { SpaceProps } from 'styled-system'

export type BasicProps = {
  title?: ReactNode
  description?: string
  background?: ReactNode
} & SpaceProps

type Props = BasicProps & {
  small?: boolean
  medium?: boolean
  children?: ReactNode
  horizonal?: boolean
}

const Banner = ({
  small,
  medium,
  description,
  title,
  children,
  background,
  horizonal,
  ...props
}: Props) => (
  <Flexbox
    {...props}
    alignItems="center"
    backgroundColor="background-color-01"
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