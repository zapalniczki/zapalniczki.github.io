import React from 'react'
import NativeSwitch from 'react-switch'
import { useTheme } from 'styled-components'

type Props = {
  checked: boolean
  onChange: (checked: boolean) => void
  size?: 'small' | 'medium' | 'large'
}

const Switch = ({ checked, onChange, size = 'medium' }: Props) => {
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
  )
}

export default Switch
