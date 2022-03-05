import { Text } from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

// eslint-disable-next-line no-restricted-imports
import { Type } from 'components/Text'
import React, { ReactNode } from 'react'
import { SpaceProps } from 'styled-system'

type Props = {
  bold?: boolean
  children?: ReactNode
  green?: boolean
  horizontal?: true
  item?: ReactNode
  label: string
  labelTextType?: Type
} & SpaceProps

const LabelledItem = ({
  bold = true,
  children,
  green,
  horizontal,
  item,
  label,
  labelTextType = 'body-2',
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
      <Text type={labelTextType}>{label}</Text>

      {item && (
        <Text
          color={green ? 'green' : undefined}
          fontWeight={bold ? 'bold' : 'unset'}
          type="body-1"
        >
          {item}
        </Text>
      )}

      {children}
    </Flexbox>
  )
}

export default LabelledItem
