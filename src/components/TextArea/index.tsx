import { StyledInput } from 'components'
import React from 'react'

type Props = {
  alfa?: number
}

const TextArea = ({ alfa }: Props) => <Container as="textarea" />

const Container = StyledInput

export default TextArea
