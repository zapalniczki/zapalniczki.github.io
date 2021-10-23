import { basketContext } from 'providers'
import { useContext } from 'react'

import { GetProductResponse } from 'models'
import { checkoutContext } from 'providers'
import subtract from 'lodash.subtract'
import add from 'lodash.add'
import { object } from 'yup'
import { useSchema } from 'hooks'

export type FormValues = {
  product_quantity: number
}

const useForm = (product: GetProductResponse) => {
  const { getProductFromBasket, setBasket } = useContext(basketContext)
  const isInBasket = getProductFromBasket(product.id)

  const { setCheckout } = useContext(checkoutContext)

  const { getSchema } = useSchema()

  const schema = object({
    product_quantity: getSchema('PRODUCT_QUANTITY')
  })

  const initialValues: FormValues = {
    product_quantity: isInBasket?.quantity ?? 1
  }

  const submitForm = (values: FormValues) => {
    const basketItem = getProductFromBasket(product.id)

    setBasket((prev) => {
      if (basketItem) {
        const index = prev.findIndex((elem) => elem.id === product.id)

        const elemsBefore = prev.slice(0, index)
        const elemsAfter = prev.slice(index + 1)

        console.log(prev, index)

        const newProduct = {
          id: basketItem.id,
          quantity: basketItem.quantity
        }

        return [...elemsBefore, newProduct, ...elemsAfter]
      }

      const newBasketProduct = {
        id: product.id,
        quantity: values.product_quantity
      }

      return [...prev, newBasketProduct]
    })

    // setCheckout((prev) => ({
    //   ...prev,
    //   total: basketItem
    //     ? subtract(prev.total, basketItem.quantity * product.price)
    //     : add(prev.total, product.price)
    // }))
  }

  return {
    initialValues,
    submitForm,
    schema
  }
}

export default useForm
