import React, { ReactNode } from 'react'
import { Flexbox, Text } from 'components'
import { SpaceProps } from 'styled-system'
import Box from 'components/Box'

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
    position="relative"
    height={small ? '20rem' : medium ? '30rem' : '40rem'}
    backgroundColor="background-color-01"
    justifyContent="center"
    alignItems="center"
  >
    <Flexbox
      paddingX={horizonal ? 'xxl-size' : 0}
      width={horizonal ? '100%' : '70rem'}
      zIndex={1}
      flexDirection={horizonal ? 'row' : 'column'}
      justifyContent={horizonal ? 'space-between' : 'center'}
      alignItems="center"
    >
      {title && title}

      {description && (
        <Text
          textAlign="center"
          marginTop="m-size"
          marginBottom="l-size"
          type="body-2"
        >
          {description}
        </Text>
      )}

      {children}
    </Flexbox>

    <Box position="absolute" left="0" top="0" width="100%" height="100%">
      {background}
    </Box>
  </Flexbox>
)

export default Banner
