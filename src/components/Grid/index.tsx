import { Box } from 'components'
import React, { ReactNode } from 'react'
import { GridTemplateColumnsProps, SpaceProps } from 'styled-system'

type Props = {
  children: ReactNode
} & SpaceProps &
  GridTemplateColumnsProps

const Grid = ({ children, ...props }: Props) => (
  <Box
    display="grid"
    gridGap={GRID_GAP}
    gridTemplateColumns="repeat(3, 1fr)"
    {...props}
  >
    {children}
  </Box>
)
const GRID_GAP = '3rem'

export default Grid
