import { Box, Flexbox } from 'components'
import React from 'react'
import BasketToggle from './BasketToggle'

const NavigationMenu = () => (
  <Flexbox
    alignItems="center"
    as="ul"
    border="2px solid red"
    justifyContent="flex-end"
    margin={0}
    padding={0}
  >
    <Box as="li" margin={0} padding={0}>
      <BasketToggle />
    </Box>
  </Flexbox>
)

export default NavigationMenu
