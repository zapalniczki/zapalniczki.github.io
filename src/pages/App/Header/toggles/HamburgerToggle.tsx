import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'components'
import { useBreakpoints } from 'hooks'
import { togglesContext } from 'providers'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

const HamburgerToggle = () => {
  const isAboveDesktop = useBreakpoints('desktop max')
  const { toggleHamburger } = useContext(togglesContext)
  const { t: commonT } = useTranslation('COMMON')

  if (isAboveDesktop) {
    return null
  }

  return (
    <Button
      onClick={toggleHamburger}
      padding="s-size"
      title={commonT('hamburgetMenuToggleLabel')}
      type="button"
      variant="quaternary"
    >
      <FontAwesomeIcon icon="bars" size="2x" />
    </Button>
  )
}

export default HamburgerToggle
