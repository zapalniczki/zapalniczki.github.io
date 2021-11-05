import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'components'
import { useBreakpoints } from 'hooks'
import { togglesContext } from 'providers'
import React, { useContext } from 'react'

const HamburgerToggle = () => {
  const desktop = useBreakpoints('desktop')
  const { toggleHamburger } = useContext(togglesContext)

  if (desktop) {
    return null
  }

  return (
    <Button
      onClick={toggleHamburger}
      padding="s-size"
      type="button"
      variant="quaternary"
    >
      <FontAwesomeIcon icon="bars" size="2x" />
    </Button>
  )
}

export default HamburgerToggle
