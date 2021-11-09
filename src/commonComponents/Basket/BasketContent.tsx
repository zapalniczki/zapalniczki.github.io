import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BasketItem } from 'commonComponents'
import { Flexbox, Text } from 'components'
import { useModalView, useTranslation } from 'hooks'
import { GetProductsByIdResponseItem } from 'models'
import { checkoutContext } from 'providers'
import React, { useContext, useEffect } from 'react'

type Props = {
  products: GetProductsByIdResponseItem[]
}

const BasketContent = ({ products }: Props) => {
  const commonT = useTranslation('COMMON').withBase('BASKET')
  const { basket, isBasketEmpty } = useContext(checkoutContext)

  const triggerModalView = useModalView('basket')

  useEffect(() => {
    triggerModalView()
  }, [])

  return (
    <Flexbox
      flexDirection="column"
      flexGrow={1}
      overflowY="auto"
      padding="s-size"
    >
      {isBasketEmpty && (
        <Flexbox
          alignItems="center"
          flexDirection="column"
          flexGrow={1}
          justifyContent="center"
        >
          <FontAwesomeIcon icon="cart-arrow-down" size="2x" />

          <Text marginTop="m-size" type="body-2">
            {commonT('empty')}
          </Text>
        </Flexbox>
      )}

      {basket.map((basketItem) => {
        const productDetails = products.find(
          (product) => product.id === basketItem.id
        )

        return (
          <BasketItem
            key={basketItem.id}
            originalId={basketItem.id}
            product={productDetails}
            quantity={basketItem.quantity}
          />
        )
      })}
    </Flexbox>
  )
}

export default BasketContent
