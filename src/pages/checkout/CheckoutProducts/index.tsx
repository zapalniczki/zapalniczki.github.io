import { Flexbox, Page, Text } from 'components'
import { useScrollTop, useTabTitle } from 'hooks'
import React, { Fragment, useContext } from 'react'
import { useTranslation } from 'hooks'
import { BasketItem } from 'commonComponents'
import { checkoutContext } from 'providers'
import { Actions, StepTracker, Total, Wrapper } from '../common'
import StepTitle from '../common/StepTitle'

const CheckoutProducts = () => {
  const { t } = useTranslation('CHECKOUT_PRODUCTS')

  const { checkout } = useContext(checkoutContext)

  useTabTitle(t('title'))
  useScrollTop()

  return (
    <Page>
      <StepTracker />

      <Wrapper>
        <StepTitle>{t('title')}</StepTitle>

        <Flexbox
          alignItems="center"
          flexDirection="column"
          marginTop="2rem"
          minHeight="20rem"
        >
          {checkout.products ? (
            checkout.products.map((product) => (
              <Fragment key={product.id}>
                <BasketItem product={product} />
              </Fragment>
            ))
          ) : (
            <Flexbox alignItems="center" flexGrow={1} justifyContent="center">
              <Text type="caption">{t('emptyState')}</Text>
            </Flexbox>
          )}
        </Flexbox>

        {checkout.products?.length && <Total />}

        <Actions />
      </Wrapper>
    </Page>
  )
}

export default CheckoutProducts
