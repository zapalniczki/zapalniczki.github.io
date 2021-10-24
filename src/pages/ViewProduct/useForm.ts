import { basketContext, checkoutContext } from 'providers'
import { useContext } from 'react'

import { GetProductResponse } from 'models'
import { object } from 'yup'
import { useSchema } from 'hooks'

export type FormValues = {
  product_quantity: number
}

const useForm = (product: GetProductResponse) => {
  const { getProductFromBasket, setBasket } = useContext(basketContext)
  const { setCheckout } = useContext(checkoutContext)
  const isInBasket = getProductFromBasket(product.id)

  const { getSchema } = useSchema()

  const schema = object({
    product_quantity: getSchema('PRODUCT_QUANTITY')
  })

  const initialValues: FormValues = {
    product_quantity: isInBasket?.quantity ?? 1
  }

  const submitForm = (values: FormValues) => {
    setBasket((prev) => {
      const productInBasket = getProductFromBasket(product.id)
      const newBasketItem = {
        id: product.id,
        quantity: values.product_quantity
      }
      if (productInBasket) {
        const index = prev.findIndex((elem) => elem.id === product.id)
        const newBasket = [...prev]
        newBasket[index] = newBasketItem

        return newBasket
      }

      return [...prev, newBasketItem]
    })

    setCheckout((prev) => {
      const productInCheckoutTotalProducts = prev.total.products.find(
        (elem) => elem.id === product.id
      )

      const newProduct = {
        id: product.id,
        total: product.price * values.product_quantity
      }
      const prevProducts = prev.products ? prev.products : []

      if (productInCheckoutTotalProducts) {
        const newCheckoutTotalProducts = [...prev.total.products]
        const index = prev.total.products.indexOf(
          productInCheckoutTotalProducts
        )

        newCheckoutTotalProducts[index] = newProduct

        const newCheckoutProducts = prevProducts
        newCheckoutProducts[index] = {
          id: product.id,
          quantity: values.product_quantity
        }

        return {
          ...prev,
          total: {
            ...prev.total,
            products: newCheckoutTotalProducts
          },
          product: newCheckoutProducts
        }
      }

      return {
        ...prev,
        total: {
          ...prev.total,
          products: [...prev.total.products, newProduct]
        },
        products: [
          ...prevProducts,
          {
            id: product.id,
            quantity: values.product_quantity
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
