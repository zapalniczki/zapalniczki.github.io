import { getProductsById } from 'api'
import { BasketItem } from 'commonComponents'
import { Columns, Flexbox, Heading, Page, QueryLoader, Text } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import { CheckoutTotal } from 'organisms'
import { checkoutContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'

const Cart = () => {
  const { t } = useTranslation('CHECKOUT_PRODUCTS')

  const { basket, isBasketEmpty } = useContext(checkoutContext)

  const ids = basket.map((e) => e.id)
  const productsQuery = useQuery([PRODUCTS_TABLE, ids], () =>
    getProductsById(ids)
  )

  useTabTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Heading level={4} marginBottom="l-size">
        {t('title')}
      </Heading>

      <Columns>
        <div>
          <QueryLoader query={productsQuery}>
            {(products) => (
              <Flexbox
                alignItems="center"
                flexDirection="column"
                minHeight="20rem"
              >
                {isBasketEmpty && (
                  <Flexbox
                    alignItems="center"
                    flexGrow={1}
                    justifyContent="center"
                  >
                    <Text type="caption">{t('emptyState')}</Text>
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
        </div>

        <div>{!isBasketEmpty && <CheckoutTotal />}</div>
      </Columns>
    </Page>
  )
}

export default Cart
