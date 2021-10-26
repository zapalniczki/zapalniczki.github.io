import { Flexbox, Page, QueryLoader, Text } from 'components'
import { useScrollTop, useTabTitle } from 'hooks'
import React, { useContext } from 'react'
import { useTranslation } from 'hooks'
import { BasketItem } from 'commonComponents'
import { checkoutContext } from 'providers'
import { Actions, StepTracker, Total, Wrapper } from '../common'
import StepTitle from '../common/StepTitle'
import { PRODUCTS_TABLE } from 'constants/db_tables'
import { getProducts } from 'api'
import { useQuery } from 'react-query'

const CheckoutProducts = () => {
  const { t } = useTranslation('CHECKOUT_PRODUCTS')

  const { basket, isBasketEmpty } = useContext(checkoutContext)
  const productsQuery = useQuery(PRODUCTS_TABLE, getProducts)

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
