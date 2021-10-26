import React, { useContext, useRef, useEffect } from 'react'
import { Flexbox, Text } from 'components'

import { checkoutContext } from 'providers'
import styled from 'styled-components'
import { basketToggleContext } from 'providers'
import { useTranslation } from 'hooks'

import Header from './Header'
import Checkout from './Checkout'
import BasketItem from './BasketItem'
import getColor from 'styles/getColor'

const Basket = () => {
  const { t } = useTranslation('COMMON')

  const { isOpen, setIsOpen } = useContext(basketToggleContext)
  const { checkout } = useContext(checkoutContext)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        event.target instanceof HTMLElement &&
        !ref.current?.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  })

  return (
    <Container isOpen={isOpen} ref={ref}>
      <Header />

      <Flexbox
        flexDirection="column"
        flexGrow={1}
        overflowY="auto"
        padding="s-size"
      >
        {!checkout.basket.length && (
          <Flexbox alignItems="center" flexGrow={1} justifyContent="center">
            <Text type="caption">{t('basket.empty')}</Text>
          </Flexbox>
        )}

        {checkout.basket.map((product) => (
          <BasketItem key={product.id} product={product} />
        ))}
      </Flexbox>

      <Checkout />
    </Container>
  )
}

type ContainerProps = { isOpen: boolean }
const Container = styled.div<ContainerProps>`
  width: 60rem;
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
