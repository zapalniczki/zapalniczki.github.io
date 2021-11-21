import { getProductsById } from 'api'
import { QueryLoader } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { checkoutContext, togglesContext } from 'providers'
import React, { useContext, useEffect, useRef } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import BasketContent from './BasketContent'
import { BasketItem } from 'organisms'
import Checkout from './Checkout'
import Header from './Header'
import BasketLoader from './index.loader'
import { AnimatePresence, motion } from 'framer-motion'

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

  return (
    <AnimatePresence>
      {basketOpen && (
        <Container
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          initial={{ x: '100%' }}
          ref={ref}
          transition={{
            type: 'spring',
            mass: 0.5,
            duration: 0.1
          }}
        >
          <Header />

          <QueryLoader Loader={<BasketLoader />} query={productsQuery}>
            {(products) => (
              <>
                <BasketContent products={products} />

                <Checkout products={products} />
              </>
            )}
          </QueryLoader>
        </Container>
      )}
    </AnimatePresence>
  )
}

const Container = styled(motion.aside)`
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
