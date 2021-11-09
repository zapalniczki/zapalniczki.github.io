import { Box, Flexbox } from 'components'
import React from 'react'
import BasketToggle from './BasketToggle'
import HamburgerToggle from './HamburgetToggle'
import ProfileToggle from './ProfileToggle'

const NavigationMenu = () => (
  <Flexbox
    alignItems="center"
    as="ul"
    justifyContent="flex-end"
    margin={0}
    padding={0}
  >
    <Box as="li" margin={0} padding={0}>
      <ProfileToggle />
    </Box>

    <Box as="li" margin={0} padding={0}>
      <BasketToggle />
    </Box>

    <Box as="li" margin={0} padding={0}>
      <HamburgerToggle />
    </Box>
  </Flexbox>
)

export default NavigationMenu
