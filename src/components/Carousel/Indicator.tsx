import { Box } from 'components'
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
    backgroundColor={isSelected ? 'black' : 'white'}
    border="none"
    disabled={isSelected}
    height="0.5rem"
    marginRight="xxs-size"
    onClick={clickHandler}
    width="2.5rem"
  />
)

const Container = styled(Box)`
  cursor: pointer;
`

export default Indicator
