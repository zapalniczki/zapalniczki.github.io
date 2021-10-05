import { Flexbox } from 'components'
import React, { ReactNode } from 'react'
import {
  FlexboxProps,
  GridColumnProps,
  HeightProps,
  SpaceProps
} from 'styled-system'

type Props = {
  children?: ReactNode
  onClick?: () => void
} & SpaceProps &
  HeightProps &
  GridColumnProps &
  FlexboxProps
const Tile = ({ onClick, children, ...props }: Props) => (
  <Flexbox
    background="white"
    border="1px solid"
    borderColor="border-color"
    flexDirection="column"
    onClick={onClick}
    padding="l-size"
    width="100%"
    {...props}
  >
    {children}
  </Flexbox>
)

export default Tile
