import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'components'
import { useBreakpoints } from 'hooks'
import React from 'react'

const HamburgerToggle = () => {
  const desktop = useBreakpoints('desktop')

  if (desktop) {
    return null
  }

  return (
    <Button
      // onClick={() => setIsOpen((prev) => !prev)}
      padding="s-size"
      type="button"
      variant="quaternary"
    >
      <FontAwesomeIcon icon="bars" size="2x" />
    </Button>
  )
}

export default HamburgerToggle
