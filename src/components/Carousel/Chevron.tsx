import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flexbox, Button } from 'components'
import { useBreakpoints, useTranslation } from 'hooks'
import React from 'react'
import { useTheme } from 'styled-components'

type Props = {
  clickHandler: () => void
  right?: boolean
}

const Chevron = ({ clickHandler, right }: Props) => {
  const { colors } = useTheme()
  const commonT = useTranslation('COMMON').withBase('CAROUSEL.arrows')
  const isDesktop = useBreakpoints('desktop')

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
      <Button
        onClick={clickHandler}
        title={commonT(right ? 'next' : 'prev')}
        variant="quaternary"
      >
        <FontAwesomeIcon
          color={colors['black']}
          icon={right ? 'chevron-right' : 'chevron-left'}
          opacity={isDesktop ? 1 : 0.25}
          size="2x"
        />
      </Button>
    </Flexbox>
  )
}

export default Chevron
