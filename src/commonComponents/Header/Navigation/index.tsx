import { Box, Flexbox } from 'components'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import BasketToggle from './BasketToggle'
import HamburgerToggle from './HamburgerToggle'
import LanguageToggle from './LanguageToggle'
import SignoutToggle from './SignoutToggle'

const Navigation = () => {
  const { i18n } = useContext(remoteConfigContext)

  return (
    <Flexbox
      alignItems="center"
      as="ul"
      justifyContent="flex-end"
      margin={0}
      padding={0}
    >
      {/* {i18n && ( */}

      <Box as="li" margin={0} padding={0}>
        <LanguageToggle />
      </Box>

      {/* )} */}

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
}

export default Navigation
