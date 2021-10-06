import React from 'react'
import NativeSwitch from 'react-switch'

type Props = {
  checked: boolean
  onChange: (checked: boolean) => void
}

const Switch = ({ checked, onChange }: Props) => {
  return (
    <NativeSwitch
      checked={checked}
      checkedIcon={false}
      onChange={onChange}
      uncheckedIcon={false}
    />
  )
}

export default Switch
