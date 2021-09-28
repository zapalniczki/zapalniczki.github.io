import Box from 'components/Box'
import React from 'react'
import styled from 'styled-components'

type Props = {
  clickHandler: (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void
  isSelected: boolean
  index: number
  label: string
}

const Indicator = ({ clickHandler, isSelected }: Props) => (
  <Container
    as="button"
    border="none"
    marginRight="xxs-size"
    width="2.5rem"
    height="0.5rem"
    backgroundColor={isSelected ? 'braty-red' : 'white'}
    disabled={isSelected}
    onClick={clickHandler}
  />
)

const Container = styled(Box)`
  cursor: pointer;
`

export default Indicator
