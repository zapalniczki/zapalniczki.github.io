import { Flexbox, Text } from 'components'
import React from 'react'
import NativeSwitch from 'react-switch'
import { useTheme } from 'styled-components'
import { FlexboxProps, SpaceProps } from 'styled-system'

type Props = {
  checked: boolean
  label?: string
  onChange: (checked: boolean) => void
  size?: 'small' | 'medium' | 'large'
} & SpaceProps &
  FlexboxProps

const Switch = ({
  checked,
  label,
  onChange,
  size = 'medium',
  ...props
}: Props) => {
  const { colors } = useTheme()

  let width, height, diameter
  switch (size) {
    case 'small':
      width = 26
      height = 16
      diameter = 10
      break

    case 'medium':
      width = 40
      height = 24
      diameter = 18

      break

    case 'large':
      width = 56
      height = 28
      diameter = 20

      break
  }

  return (
    <Flexbox {...props} alignItems="center">
      {label && (
        <Text marginRight="m-size" type="body-2">
          {label}
        </Text>
      )}

      <NativeSwitch
        checked={checked}
        checkedIcon={false}
        handleDiameter={diameter}
        height={height}
        onChange={onChange}
        onColor={colors['gray-01']}
        uncheckedIcon={false}
        width={width}
      />
    </Flexbox>
  )
}

export default Switch
