import { ProductDetails } from 'api'
import { Flexbox, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import styled from 'styled-components'
import getColor from 'styles/getColor'

type Props = {
  mold: ProductDetails['mold']
}

const AvilabilityIndicator = ({ mold }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')
  const status = !mold ? 'NULL' : mold.status

  return (
    <Flexbox alignItems="center" marginTop="s-size">
      <Dot status={status} />
      <Text marginLeft="s-size" type="caption">
        {t(`avilability.${status}`)}
      </Text>
    </Flexbox>
  )
}

type DotProps = { status: 'NULL' | 'IN_PROGRESS' | 'DONE' }
const Dot = styled.div<DotProps>`
  width: ${(props) => props.theme.space['m-size']};
  height: ${(props) => props.theme.space['m-size']};
  background: ${(props) => {
    if (props.status === 'NULL') {
      return getColor('red')(props)
    } else if (props.status === 'IN_PROGRESS') {
      return getColor('yellow')(props)
    }

    return getColor('green')(props)
  }};
  border-radius: 50%;
`

export default AvilabilityIndicator