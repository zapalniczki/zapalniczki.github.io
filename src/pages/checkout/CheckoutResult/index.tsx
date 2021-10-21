import { Button, Flexbox, Tile, Page, Text, Heading } from 'components'
import { PRODUCTS, HOME } from 'constants/routes'
import React from 'react'
import { useTranslation } from 'hooks'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { useScrollTop, useTabTitle } from 'hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'
import { StepTitle, Wrapper } from '../common'
import { CheckoutResultLocationState } from '../CheckoutPayment/useForm'

const CheckoutResult = () => {
  const { colors } = useTheme()
  const { t } = useTranslation('CHECKOUT_RESULT')

  const { state } = useLocation<CheckoutResultLocationState>()
  const history = useHistory()

  useTabTitle(t('title'))
  useScrollTop()

  if (!state?.orderID) {
    return <Redirect to={HOME} />
  }

  return (
    <Page>
      <Wrapper>
        <Tile alignItems="center">
          <Flexbox justifyContent="center" marginBottom="l-size">
            <FontAwesomeIcon
              color={colors.green}
              icon="check-circle"
              size="5x"
            />
          </Flexbox>

          <StepTitle>{t('title')}</StepTitle>

          <Text marginTop="l-size" type="body-2">
            {t('orderId')}
          </Text>

          <Heading level={5} marginTop="l-size">
            {state.orderID}
          </Heading>

          <Text marginTop="l-size" type="body-1">
            {t('info')}
          </Text>

          <Text marginTop="l-size" type="body-1">
            {t('paymentInfoShort')}
          </Text>

          <Flexbox
            flexDirection="row-reverse"
            justifyContent="space-between"
            marginTop="xl-size"
            width="100%"
          >
            <Button onClick={() => history.push(PRODUCTS)} variant="primary">
              {t('actions.backToShop')}
            </Button>
            <Button onClick={() => history.push(HOME)} variant="secondary">
              {t('actions.backToHome')}
            </Button>
          </Flexbox>
        </Tile>
      </Wrapper>
    </Page>
  )
}

export default CheckoutResult
