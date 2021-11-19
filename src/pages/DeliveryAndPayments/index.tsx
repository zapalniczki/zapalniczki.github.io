import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getDeliveryTypes, getPaymentTypes } from 'api'
import { ReadTermsAndConditions } from 'commonComponents'
import {
  Banner,
  FeatureItem,
  Flexbox,
  Grid,
  Page,
  QueryLoader,
  SectionHead
} from 'components'
import { DELIVERY_TYPES_TABLE, PAYMENT_TYPE_TABLE } from 'constants/db_tables'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'
import { displayMoney } from 'utils'
import Option from './Option'

const DeliveryAndPayments = () => {
  const { t } = useTranslation('DELIVERY_AND_PAYMENTS')

  useScrollTop()
  usePageTitle(t('title'))

  const deliveryTypesQuery = useQuery(DELIVERY_TYPES_TABLE, getDeliveryTypes)

  const params = {}
  const paymentTypesQuery = useQuery([PAYMENT_TYPE_TABLE, params], () =>
    getPaymentTypes(params)
  )

  return (
    <Page>
      <Banner size="SMALL" title={t('title')} />

      <SectionHead marginTop="xxl-size" title={t('processingTime.title')} />

      <Grid
        gridTemplateColumns={['unset', '1fr', '1fr', '1fr 5rem 1fr 5rem 1fr']}
      >
        <Option
          description={t('processingTime.items.PRODUCTION.description')}
          icon="calendar-alt"
          title={t('processingTime.items.PRODUCTION.title')}
        />

        <Flexbox alignSelf="center" justifyContent="center">
          <FontAwesomeIcon icon="plus" size="3x" />
        </Flexbox>

        <Option
          description={t('processingTime.items.DELIVERY.description')}
          icon="truck-loading"
          title={t('processingTime.items.DELIVERY.title')}
        />

        <Flexbox alignSelf="center" justifyContent="center">
          <FontAwesomeIcon icon="equals" size="3x" />
        </Flexbox>

        <Option
          description={t('processingTime.items.TOTAL.description')}
          icon="boxes"
        />
      </Grid>

      <SectionHead marginTop="xxl-size" title={t('delivery.title')} />

      <QueryLoader query={deliveryTypesQuery}>
        {(deliveryTypes) => (
          <Grid gridTemplateColumns={['unset', '1fr', '1fr', 'repeat(3, 1fr)']}>
            {deliveryTypes
              .filter((type) => type.is_enabled)
              .map((type) => (
                <FeatureItem
                  key={type.id}
                  subtitle={`${displayMoney(type.price)} - ${type.time}`}
                  title={type.label}
                >
                  <FontAwesomeIcon
                    icon={type.frontend_icon_name as IconName}
                    size="3x"
                  />
                </FeatureItem>
              ))}
          </Grid>
        )}
      </QueryLoader>

      <SectionHead marginTop="xxl-size" title={t('payments.title')} />

      <QueryLoader query={paymentTypesQuery}>
        {(paymentTypes) => (
          <Grid gridTemplateColumns={['unset', '1fr', '1fr', 'repeat(3, 1fr)']}>
            {paymentTypes
              .filter((type) => type.is_enabled)
              .map((type) => (
                <FeatureItem
                  key={type.id}
                  subtitle={`${displayMoney(type.price)} - ${type.time}`}
                  title={type.label}
                >
                  <FontAwesomeIcon
                    icon={type.frontend_icon_name as IconName}
                    size="3x"
                  />
                </FeatureItem>
              ))}
          </Grid>
        )}
      </QueryLoader>

      <ReadTermsAndConditions />
    </Page>
  )
}
export default DeliveryAndPayments
