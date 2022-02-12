import { checkoutContext } from 'providers'
import { useContext } from 'react'

import { GetProductResponse } from 'models'
import { object } from 'yup'
import { useFormSchema } from 'hooks'

export type FormValues = {
  product_quantity: number
}

const useForm = (product: GetProductResponse) => {
  const { getProductFromBasket } = useContext(checkoutContext)
  const { setCheckout } = useContext(checkoutContext)
  const isInBasket = getProductFromBasket(product.id)

  const { getSchema } = useFormSchema()

  const schema = object({
    product_quantity: getSchema('PRODUCT_QUANTITY')
  })

  const initialValues: FormValues = {
    product_quantity: isInBasket?.quantity ?? 1
  }

  const submitForm = (values: FormValues) => {
    setCheckout((prev) => {
      const basketItemIndex = prev.basket.findIndex(
        (elem) => elem.id === product.id
      )

      if (basketItemIndex > -1) {
        const newBasket = [...prev.basket]

        newBasket[basketItemIndex] = {
          id: product.id,
          quantity: values.product_quantity,
          price_en: product.price_en,
          price_pl: product.price_pl
        }

        return {
          ...prev,
          basket: newBasket
        }
      }

      return {
        ...prev,
        basket: [
          ...prev.basket,
          {
            id: product.id,
            quantity: values.product_quantity,
            price_pl: product.price_pl,
            price_en: product.price_en
          }
        ]
      }
    })
  }

  return {
    initialValues,
    submitForm,
    schema
  }
}

export default useForm
