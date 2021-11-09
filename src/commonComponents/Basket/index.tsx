import { getProductsById } from 'api'
import { QueryLoader } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { checkoutContext, togglesContext } from 'providers'
import React, { useContext, useEffect, useRef } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import BasketContent from './BasketContent'
import BasketItem from './BasketItem'
import Checkout from './Checkout'
import Header from './Header'

const Basket = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { basketOpen, closeBasket } = useContext(togglesContext)
  const { basket } = useContext(checkoutContext)

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
  }, [])

  const ids = basket.map((e) => e.id)
  const productsQuery = useQuery([PRODUCTS_TABLE, ids], () =>
    getProductsById(ids)
  )

  if (!basketOpen) {
    return null
  }

  return (
    <Container ref={ref}>
      <Header />

      <QueryLoader query={productsQuery}>
        {(products) => (
          <>
            <BasketContent products={products} />

            <Checkout products={products} />
          </>
        )}
      </QueryLoader>
    </Container>
  )
}

const Container = styled.aside`
  width: 60rem;
  max-width: 100vw;
  height: 100vh;
  background: ${getColor('white')};
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.08);
  z-index: ${(props) => props.theme.zIndices.basket};
`

export default Basket
export { BasketItem }
