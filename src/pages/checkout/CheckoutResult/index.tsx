import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Flexbox, Heading, Page, Text, Tile } from 'components'
import { ROUTES } from 'braty-common'

import {
  useBreakpoints,
  useScrollTop,
  usePageTitle,
  useTranslation
} from 'hooks'
import React from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'

import { useTheme } from 'styled-components'
import { getOrderPath } from 'utils'
import { object, string, enum as zenum, TypeOf } from 'zod'

const CheckoutResult = () => {
  const { colors } = useTheme()
  const { t } = useTranslation('CHECKOUT_RESULT')
  const isMobile = useBreakpoints('mobile')

  const location = useLocation()
  const navigate = useNavigate()

  usePageTitle(t('title'))
  useScrollTop()

  const locationState: CheckoutResultLocationState =
    checkoutResultLocationStateSchema.parse(location.state)

  if (!locationState?.orderId) {
    return <Navigate to={ROUTES.HOME} />
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
          {locationState.orderId}
        </Heading>

        <Text marginTop="l-size" textAlign="center" type="body-2">
          {t(`PAYMENT_INFO.${locationState.productionTime.toLowerCase()}`)}
        </Text>

        <Flexbox
          flexDirection={isMobile ? 'column' : 'row-reverse'}
          justifyContent="space-between"
          marginTop="l-size"
          width="100%"
        >
          <Button
            label={t('actions.seeOrder')}
            onClick={() => {
              const path = getOrderPath(locationState.orderId)

              navigate(path)
            }}
            size="medium"
            variant="primary"
          />

          <Button
            label={t('actions.backToHome')}
            marginTop={isMobile ? 'm-size' : 0}
            onClick={() => navigate(ROUTES.HOME)}
            size="medium"
            variant="secondary"
          />
        </Flexbox>
      </Tile>
    </Page>
  )
}

// TODO https://github.com/remix-run/react-router/issues/8503
const checkoutResultLocationStateSchema = object({
  orderId: string(),
  productionTime: zenum(['LONG', 'SHORT'])
})

export type CheckoutResultLocationState = TypeOf<
  typeof checkoutResultLocationStateSchema
>

export default CheckoutResult
