import { Flexbox, Text } from 'components'
import React from 'react'
import { SpaceProps } from 'styled-system'

type Props = {
  item: string
  label: string
} & SpaceProps

const LabelledItem = ({ item, label, ...props }: Props) => (
  <Flexbox flexDirection="column" {...props}>
    <Text type="body-2">{label}</Text>

    <Text fontWeight="bold" type="body-1">
      {item}
    </Text>
  </Flexbox>
)

export default LabelledItem
