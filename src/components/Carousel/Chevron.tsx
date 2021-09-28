import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flexbox, Button } from 'components'
import React from 'react'
import { useTheme } from 'styled-components'

type Props = {
  right?: boolean
  clickHandler: () => void
}

const Chevron = ({ right, clickHandler }: Props) => {
  const { colors } = useTheme()

  return (
    <Flexbox
      alignItems="center"
      height="100%"
      left={!right ? 0 : 'unset'}
      position="absolute"
      right={right ? 0 : 'unset'}
      top="0"
      zIndex={5}
    >
      <Button onClick={clickHandler} variant="quaternary">
        <FontAwesomeIcon
          color={colors['braty-red']}
          icon={right ? 'chevron-right' : 'chevron-left'}
          size="2x"
        />
      </Button>
    </Flexbox>
  )
}

export default Chevron
