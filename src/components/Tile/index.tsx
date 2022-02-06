import { Flexbox } from 'components'
import React, { ReactNode } from 'react'
import {
  FlexboxProps,
  GridColumnProps,
  HeightProps,
  MaxWidthProps,
  SpaceProps,
  WidthProps
} from 'styled-system'

type Props = {
  children?: ReactNode
  onClick?: () => void
} & SpaceProps &
  HeightProps &
  GridColumnProps &
  FlexboxProps &
  WidthProps &
  MaxWidthProps

const Tile = ({ children, onClick, ...props }: Props) => (
  <Flexbox
    background="white"
    border="1px solid"
    borderColor="border-color"
    borderRadius="tiny"
    flexDirection="column"
    onClick={onClick}
    padding={['unset', 'm-size', 'm-size', 'l-size']}
    width="100%"
    {...props}
  >
    {children}
  </Flexbox>
)

export default Tile
