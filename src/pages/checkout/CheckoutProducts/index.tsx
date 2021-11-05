import { getProductsById } from 'api'
import { BasketItem } from 'commonComponents'
import { Flexbox, Page, QueryLoader, Text } from 'components'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import { checkoutContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { Actions, StepTracker, Total, Wrapper } from '../common'
import StepTitle from '../common/StepTitle'

const CheckoutProducts = () => {
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
      <StepTracker />

      <Wrapper>
        <StepTitle>{t('title')}</StepTitle>

        <QueryLoader query={productsQuery}>
          {(products) => (
            <Flexbox
              alignItems="center"
              flexDirection="column"
              marginTop="2rem"
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

        {!isBasketEmpty && <Total />}

        <Actions />
      </Wrapper>
    </Page>
  )
}

export default CheckoutProducts
