import { Flexbox, Page, Text } from 'components'
import { useScrollTop, useTabTitle } from 'hooks'
import React, { Fragment, useContext } from 'react'
import { useTranslation } from 'hooks'
import { BasketItem } from 'commonComponents'
import { basketContext } from 'providers/BasketProvider'
import { Actions, StepTracker, Total, Wrapper } from '../common'
import StepTitle from '../common/StepTitle'

const CheckoutProducts = () => {
  const { t } = useTranslation('CHECKOUT_PRODUCTS')

  const { basket, basketLength } = useContext(basketContext)

  useTabTitle(t('title'))
  useScrollTop()

  const isBasketEmpty = !basketLength

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
          {isBasketEmpty && (
            <Flexbox alignItems="center" flexGrow={1} justifyContent="center">
              <Text type="caption">{t('emptyState')}</Text>
            </Flexbox>
          )}

          {basket.map((product) => (
            <Fragment key={product.id}>
              <BasketItem product={product} />
            </Fragment>
          ))}
        </Flexbox>

        {!isBasketEmpty && <Total />}
        <Actions />
      </Wrapper>
    </Page>
  )
}

export default CheckoutProducts
