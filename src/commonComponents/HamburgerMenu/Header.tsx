import React, { useContext, useEffect } from 'react'
import { Flexbox, Button, Text, Separator } from 'components'
import { useModalView, useTranslation } from 'hooks'

import { togglesContext } from 'providers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const commonT = useTranslation('COMMON').withBase('HAMBURGER_MENU')
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
      <Flexbox alignItems="center" padding="s-size">
        <Text marginRight="auto" type="subtitle-1">
          {commonT('title')}
        </Text>

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
