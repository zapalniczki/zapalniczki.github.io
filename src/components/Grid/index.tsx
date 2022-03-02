import { Box } from 'components'
import React, { ReactNode } from 'react'
import {
  BorderProps,
  GridAutoColumnsProps,
  GridAutoFlowProps,
  GridTemplateColumnsProps,
  GridTemplateRowsProps,
  SpaceProps
} from 'styled-system'

type Props = {
  children: ReactNode
} & SpaceProps &
  GridTemplateColumnsProps &
  GridTemplateRowsProps &
  BorderProps &
  GridAutoFlowProps &
  GridAutoColumnsProps

const Grid = ({ children, ...props }: Props) => (
  <Box
    display="grid"
    gridGap="l-size"
    gridTemplateColumns="repeat(3, 1fr)"
    {...props}
  >
    {children}
  </Box>
)

export default Grid
