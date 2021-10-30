import { Flexbox, Text } from 'components'
import React, { ReactNode } from 'react'
import { SpaceProps } from 'styled-system'

type Props = {
  children?: ReactNode
  item?: ReactNode
  label: string
} & SpaceProps

const LabelledItem = ({ children, item, label, ...props }: Props) => (
  <Flexbox alignItems="flex-start" flexDirection="column" {...props}>
    <Text type="body-2">{label}</Text>

    {item && (
      <Text fontWeight="bold" type="body-1">
        {item}
      </Text>
    )}

    {children}
  </Flexbox>
)

export default LabelledItem
