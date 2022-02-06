import { PanelHeader } from 'components'
import { useModalView } from 'hooks'
import { togglesContext } from 'providers'
import React, { useContext, useEffect } from 'react'

const Header = () => {
  const { closeHamburger } = useContext(togglesContext)
  const triggerModalView = useModalView('hamburgerMenu')

  useEffect(() => {
    triggerModalView()
  }, [])

  return <PanelHeader closeOnClick={closeHamburger} />
}

export default Header
