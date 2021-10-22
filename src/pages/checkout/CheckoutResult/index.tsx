import { Button, Flexbox, Tile, Page, Text, Heading } from 'components'
import { PRODUCTS, HOME } from 'constants/routes'
import React from 'react'
import { useTranslation } from 'hooks'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { useScrollTop, useTabTitle } from 'hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'
import { Wrapper } from '../common'
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
          <Flexbox
            alignItems="center"
            justifyContent="center"
            marginBottom="l-size"
            marginTop="xl-size"
          >
            <FontAwesomeIcon
              color={colors.green}
              icon="check-circle"
              size="7x"
            />
          </Flexbox>

          <Heading color="green" fontWeight="bold" level={5}>
            {t('title')}
          </Heading>

          <Heading level={5} marginTop="l-size">
            {state.orderID}
          </Heading>

          <Text marginTop="l-size" type="body-2">
            {t(`PAYMENT_INFO.${state.productionTime.toLowerCase()}`)}
          </Text>

          <Flexbox
            flexDirection="row-reverse"
            justifyContent="space-between"
            marginTop="l-size"
            width="100%"
          >
            <Button
              label={t('actions.backToShop')}
              onClick={() => history.push(PRODUCTS)}
              size="medium"
              variant="primary"
            />

            <Button
              label={t('actions.backToHome')}
              onClick={() => history.push(HOME)}
              size="medium"
              variant="secondary"
            />
          </Flexbox>
        </Tile>
      </Wrapper>
    </Page>
  )
}

export default CheckoutResult
