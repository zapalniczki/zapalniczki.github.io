import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getProductsById } from 'api'
import { DB_TABLES } from 'braty-common'
import {
  Columns,
  Flexbox,
  Grid,
  Heading,
  Page,
  QueryLoader,
  Text
} from 'components'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import { BasketItem, CheckoutTotal } from 'organisms'
import { checkoutContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import Loader from './index.loader'

const Cart = () => {
  const { t } = useTranslation('CART')

  const { basket, isBasketEmpty } = useContext(checkoutContext)

  const ids = basket.map((e) => e.id)
  const productsQuery = useQuery([DB_TABLES.PRODUCTS, ids], () =>
    getProductsById(ids)
  )

  usePageTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <Heading level={4}>{t('title')}</Heading>

      {isBasketEmpty && (
        <Flexbox
          alignItems="center"
          flexDirection="column"
          flexGrow={1}
          justifyContent="center"
          minHeight="50vh"
        >
          <FontAwesomeIcon icon="cart-arrow-down" size="3x" />

          <Text marginTop="l-size" type="body-2">
            {t('emptyState')}
          </Text>
        </Flexbox>
      )}

      {!isBasketEmpty && (
        <Columns>
          <div>
            <QueryLoader Loader={<Loader />} query={productsQuery}>
              {(products) => (
                <Grid gridTemplateColumns="1fr">
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
                </Grid>
              )}
            </QueryLoader>
          </div>

          <div>
            <CheckoutTotal />
          </div>
        </Columns>
      )}
    </Page>
  )
}

export default Cart
