import { Flexbox, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import { MoldStatus } from 'models'
import getSpace from 'styles/getSpace'

type Props = {
  status: MoldStatus
}

const AvilabilityIndicator = ({ status }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')

  if (status === 'UNDONE') {
    return null
  }

  return (
    <Flexbox alignItems="center">
      <Dot status={status} />

      <Text marginLeft="s-size" type="caption">
        {t(`avilability.${status}`)}
      </Text>
    </Flexbox>
  )
}

type DotProps = { status: MoldStatus }
const Dot = styled.div<DotProps>`
  width: ${getSpace('m-size')};
  height: ${getSpace('m-size')};
  background: ${(props) => {
    if (props.status === 'UNDONE') {
      return getColor('yellow')(props)
    } else if (props.status === 'IN_PROGRESS') {
      return getColor('gray-01')(props)
    }

    return getColor('green')(props)
  }};
  border-radius: 50%;
`

export default AvilabilityIndicator
