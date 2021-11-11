import { Box, Flexbox } from 'components'
import React from 'react'
import BasketToggle from './BasketToggle'
import HamburgerToggle from './HamburgerToggle'
import SignoutToggle from './SignoutToggle'

const Navigation = () => (
  <Flexbox
    alignItems="center"
    as="ul"
    justifyContent="flex-end"
    margin={0}
    marginRight="-1rem"
    padding={0}
  >
    {/* <Box as="li" margin={0} padding={0}>
      <ProfileToggle />
    </Box> */}

    <Box as="li" margin={0} padding={0}>
      <BasketToggle />
    </Box>

    <Box as="li" margin={0} padding={0}>
      <SignoutToggle />
    </Box>

    <Box as="li" margin={0} padding={0}>
      <HamburgerToggle />
    </Box>
  </Flexbox>
)

export default Navigation
