import { basketContext } from 'providers'
import { useContext } from 'react'
import { string, object } from 'yup'

import { GetProductResponse } from 'api'
import { checkoutContext } from 'providers'
import subtract from 'lodash.subtract'
import add from 'lodash.add'

const useForm = (product: GetProductResponse) => {
  const { getProductFromBasket, setBasket } = useContext(basketContext)
  const { setCheckout } = useContext(checkoutContext)

  const initialValues = {}

  const schema = object({
    variant: string()
  })

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
      totalNew: basketItem
        ? subtract(prev.totalNew, basketItem.quantity * product.price)
        : add(prev.totalNew, product.price)
    }))
  }

  return {
    initialValues,
    schema,
    submitForm
  }
}

export default useForm
