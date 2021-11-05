import { togglesContext } from 'providers'
import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import BasketContent from './BasketContent'
import BasketItem from './BasketItem'
import Checkout from './Checkout'
import Header from './Header'

const Basket = () => {
  const { basketOpen, closeBasket } = useContext(togglesContext)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        event.target instanceof HTMLElement &&
        !ref.current?.contains(event.target)
      ) {
        closeBasket()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  })

  return (
    <Container isOpen={basketOpen} ref={ref}>
      <Header />

      <BasketContent />

      <Checkout />
    </Container>
  )
}

type ContainerProps = { isOpen: boolean }
const Container = styled.aside<ContainerProps>`
  width: 60rem;
  max-width: 100vw;
  height: 100vh;
  background: ${getColor('white')};
  position: fixed;
  top: 0;
  right: 0;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;

  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.08);
  z-index: ${(props) => props.theme.zIndices.basket};
`

export default Basket
export { BasketItem }
