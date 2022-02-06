import { getProductsById } from 'api'
import { DB_TABLES } from 'braty-common'
import { PopupPanel, QueryLoader } from 'components'
import { BasketItem } from 'organisms'
import { checkoutContext, togglesContext } from 'providers'
import React, { useContext, useEffect, useRef } from 'react'
import { useQuery } from 'react-query'
import BasketContent from './BasketContent'
import Checkout from './Checkout'
import Header from './Header'
import BasketLoader from './index.loader'

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
  const productsQuery = useQuery([DB_TABLES.PRODUCTS, ids], () =>
    getProductsById(ids)
  )

  if (!basketOpen) {
    return null
  }

  return (
    <PopupPanel>
      <Header />

      <QueryLoader Loader={<BasketLoader />} query={productsQuery}>
        {(products) => (
          <>
            <BasketContent products={products} />

            <Checkout products={products} />
          </>
        )}
      </QueryLoader>
    </PopupPanel>
  )
}

export default Basket
export { BasketItem }
