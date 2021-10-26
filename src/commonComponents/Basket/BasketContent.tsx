import { getProducts } from 'api'
import { BasketItem } from 'commonComponents'
import { Flexbox, QueryLoader, Text } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { useTranslation } from 'hooks'
import { checkoutContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'

const BasketContent = () => {
  const { t } = useTranslation('COMMON')
  const { basket, isBasketEmpty } = useContext(checkoutContext)
  const productsQuery = useQuery(PRODUCTS_TABLE, getProducts)

  return (
    <QueryLoader query={productsQuery}>
      {(products) => (
        <Flexbox
          flexDirection="column"
          flexGrow={1}
          overflowY="auto"
          padding="s-size"
        >
          {isBasketEmpty && (
            <Flexbox alignItems="center" flexGrow={1} justifyContent="center">
              <Text type="caption">{t('basket.empty')}</Text>
            </Flexbox>
          )}

          {basket.map((basketItem) => {
            const thisProduct = products.find(
              (product) => product.id === basketItem.id
            )

            return (
              <BasketItem
                key={basketItem.id}
                originalId={basketItem.id}
                product={thisProduct}
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
