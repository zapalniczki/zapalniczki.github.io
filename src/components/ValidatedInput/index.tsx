import React, { ReactNode } from 'react'
import Flexbox from '../Flexbox'
import { useField } from 'formik'
import InputLabel from '../InputLabel'

type Props = {
  children: ReactNode
  label?: string
  name: string
}

const ValidatedInput = ({ children, label, name }: Props) => {
  const [, meta] = useField(name)

  const touched = meta.touched
  const error = meta.error

  return (
    <Flexbox flexDirection="column">
      {touched && error ? (
        <InputLabel error>{error}</InputLabel>
      ) : (
        label && <InputLabel htmlFor={name}>{label}</InputLabel>
      )}

      {children}
    </Flexbox>
  )
}

export default ValidatedInput
