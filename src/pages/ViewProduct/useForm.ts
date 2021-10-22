import { basketContext } from 'providers'
import { useContext } from 'react'

import { GetProductResponse } from 'models'
import { checkoutContext } from 'providers'
import subtract from 'lodash.subtract'
import add from 'lodash.add'

const useForm = (product: GetProductResponse) => {
  const { getProductFromBasket, setBasket } = useContext(basketContext)
  const { setCheckout } = useContext(checkoutContext)

  const initialValues = {}

  const submitForm = () => {
    const basketItem = getProductFromBasket(product.id)

    setBasket((prev) => {
      if (basketItem) {
        const productInBasket = prev.find((elem) => elem.id === product.id)

        return prev.filter((elem) => elem !== productInBasket)
      }
      const newBasketProduct = {
        id: product.id,
        quantity: 1
      }

      return [...prev, newBasketProduct]
    })

    setCheckout((prev) => ({
      ...prev,
      total: basketItem
        ? subtract(prev.total, basketItem.quantity * product.price)
        : add(prev.total, product.price)
    }))
  }

  return {
    initialValues,
    submitForm
  }
}

export default useForm
