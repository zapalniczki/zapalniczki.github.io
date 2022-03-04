import { MoldStatus } from 'braty-common'
import { Flexbox, Text } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'
import styled from 'styled-components'
import { getColor, getSpace } from 'styles'

type Props = {
  status: MoldStatus
  visible: boolean
}

const AvilabilityIndicator = ({ status, visible }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')

  if (visible && status === 'UNDONE') {
    return null
  }

  return (
    <Flexbox alignItems="center" marginTop="s-size">
      <Dot status={status} visible={visible} />

      <Text marginLeft="s-size" type="caption">
        {t(!visible ? 'notVisible' : `avilability.${status}`)}
      </Text>
    </Flexbox>
  )
}

const Dot = styled.div<Props>`
  width: ${getSpace('m-size')};
  height: ${getSpace('m-size')};
  background: ${(props) => {
    if (!props.visible) {
      return getColor('red')(props)
    } else if (props.status === 'DONE') {
      return getColor('green')(props)
    } else if (props.status === 'IN_PROGRESS') {
      return getColor('yellow')(props)
    }

    return getColor('dark-color')(props)
  }};
  border-radius: 50%;
`

export default AvilabilityIndicator
