import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Flexbox, Separator } from 'components'
import { useModalView } from 'hooks'
import { togglesContext } from 'providers'
import React, { useContext, useEffect } from 'react'

const Header = () => {
  const { closeHamburger } = useContext(togglesContext)
  const triggerModalView = useModalView('hamburgerMenu')

  useEffect(() => {
    triggerModalView()
  }, [])

  return (
    <Flexbox
      backgroundColor="white"
      flexDirection="column"
      width="100%"
      zIndex={70}
    >
      <Flexbox alignItems="center" justifyContent="flex-end" padding="s-size">
        <Button
          onClick={closeHamburger}
          size="small"
          type="button"
          variant="quaternary"
        >
          <FontAwesomeIcon icon="times" size="2x" />
        </Button>
      </Flexbox>

      <Separator marginX="s-size" marginY="0" width="auto" />
    </Flexbox>
  )
}

export default Header
