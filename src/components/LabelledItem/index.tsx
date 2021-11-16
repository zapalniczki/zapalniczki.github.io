import { Flexbox, Text } from 'components'
import React, { ReactNode } from 'react'
import { SpaceProps } from 'styled-system'

type Props = {
  bold?: boolean
  children?: ReactNode
  horizontal?: true
  item?: ReactNode
  label: string
} & SpaceProps

const LabelledItem = ({
  bold = true,
  children,
  horizontal,
  item,
  label,
  ...props
}: Props) => {
  if (!children && !item) {
    return null
  }

  return (
    <Flexbox
      alignItems="flex-start"
      flexDirection={horizontal ? 'row' : 'column'}
      justifyContent={horizontal ? 'space-between' : 'unset'}
      {...props}
    >
      <Text type="body-2">{label}</Text>

      {item && (
        <Text fontWeight={bold ? 'bold' : 'unset'} type="body-1">
          {item}
        </Text>
      )}

      {children}
    </Flexbox>
  )
}

export default LabelledItem
