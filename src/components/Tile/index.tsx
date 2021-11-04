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
const Tile = ({ children, onClick, ...props }: Props) => (
  <Flexbox
    background="white"
    border="1px solid"
    borderColor="border-color"
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
