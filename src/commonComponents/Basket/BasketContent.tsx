import { getProductsById } from 'api'
import { BasketItem } from 'commonComponents'
import { Flexbox, QueryLoader, Text } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { useTranslation } from 'hooks'
import { checkoutContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'

const BasketContent = () => {
  const commonT = useTranslation('COMMON').withBase('BASKET')
  const { basket, isBasketEmpty } = useContext(checkoutContext)

  const ids = basket.map((e) => e.id)
  const productsQuery = useQuery([PRODUCTS_TABLE, ids], () =>
    getProductsById(ids)
  )

  return (
    <QueryLoader query={productsQuery}>
      {(products) => (
        <Flexbox
          border="5px solid blue"
          flexDirection="column"
          flexGrow={1}
          overflowY="auto"
          padding="s-size"
        >
          {isBasketEmpty && (
            <Flexbox alignItems="center" flexGrow={1} justifyContent="center">
              <Text type="caption">{commonT('empty')}</Text>
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
      )}
    </QueryLoader>
  )
}

export default BasketContent
