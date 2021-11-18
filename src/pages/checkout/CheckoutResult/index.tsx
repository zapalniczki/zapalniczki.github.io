import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Flexbox, Heading, Page, Text, Tile } from 'components'
import { HOME } from 'constants/routes'
import {
  useBreakpoints,
  useScrollTop,
  useTabTitle,
  useTranslation
} from 'hooks'
import React from 'react'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { getOrderPath } from 'utils'
import { CheckoutResultLocationState } from '../CheckoutPayment/useForm'

const CheckoutResult = () => {
  const { colors } = useTheme()
  const { t } = useTranslation('CHECKOUT_RESULT')
  const isDesktop = useBreakpoints('desktop')

  const { state } = useLocation<CheckoutResultLocationState>()
  const history = useHistory()

  useTabTitle(t('title'))
  useScrollTop()

  if (!state?.orderID) {
    return <Redirect to={HOME} />
  }

  return (
    <Page alignItems="center">
      <Tile alignItems="center" maxWidth="100%" width="70rem">
        <Flexbox
          alignItems="center"
          justifyContent="center"
          marginBottom="l-size"
          marginTop="xl-size"
        >
          <FontAwesomeIcon color={colors.green} icon="check-circle" size="7x" />
        </Flexbox>

        <Heading color="green" fontWeight="bold" level={5} textAlign="center">
          {t('title')}
        </Heading>

        <Heading level={5} marginTop="l-size" textAlign="center">
          {state.orderID}
        </Heading>

        <Text marginTop="l-size" textAlign="center" type="body-2">
          {t(`PAYMENT_INFO.${state.productionTime.toLowerCase()}`)}
        </Text>

        <Flexbox
          alignItems={isDesktop ? 'unset' : 'flex-end'}
          flexDirection={isDesktop ? 'row-reverse' : 'column'}
          justifyContent="space-between"
          marginTop="l-size"
          width="100%"
        >
          <Button
            label={t('actions.seeOrder')}
            onClick={() => {
              const path = getOrderPath(state.orderID)
              history.push(path)
            }}
            size="medium"
            variant="primary"
          />

          <Button
            label={t('actions.backToHome')}
            marginTop={isDesktop ? 0 : 'm-size'}
            onClick={() => history.push(HOME)}
            size="medium"
            variant="secondary"
          />
        </Flexbox>
      </Tile>
    </Page>
  )
}

export default CheckoutResult
