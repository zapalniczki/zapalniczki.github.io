import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGetDeliveryTypes, useGetPaymentTypes } from 'api'
import { ReadTermsAndConditions } from 'commonComponents'
import {
  Banner,
  Flexbox,
  Grid,
  Page,
  QueryLoader,
  SectionHead,
  FeatureItem,
  Heading
} from 'components'
import { useScrollTop, useTabTitle } from 'hooks'
import React from 'react'
import { useTranslation } from 'hooks'
import { displayMoney } from 'utils'
import Option from './Option'

const DeliveryAndPayments = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('DELIVERY_AND_PAYMENTS')

  useScrollTop()
  useTabTitle(t('title'))

  const deliveryTypesQuery = useGetDeliveryTypes()
  const paymentTypesQuery = useGetPaymentTypes()

  return (
    <Page>
      <Banner
        horizonal
        small
        title={<Heading level={4}>{t('title')}</Heading>}
      />

      <SectionHead marginTop="xxl-size" title={t('processingTime.title')} />
      <Grid gridTemplateColumns="1fr 5rem 1fr 5rem 1fr">
        <Option
          icon="calendar-alt"
          title={t('processingTime.items.PRODUCTION.title')}
          description={t('processingTime.items.PRODUCTION.description')}
        />

        <Flexbox alignSelf="center">
          <FontAwesomeIcon size="3x" icon="plus" />
        </Flexbox>

        <Option
          icon="truck-loading"
          title={t('processingTime.items.DELIVERY.title')}
          description={t('processingTime.items.DELIVERY.description')}
        />

        <Flexbox alignSelf="center">
          <FontAwesomeIcon size="3x" icon="equals" />
        </Flexbox>

        <Option
          icon="boxes"
          description={t('processingTime.items.TOTAL.description')}
        />
      </Grid>

      <SectionHead marginTop="xxl-size" title={t('payments.title')} />
      <QueryLoader query={paymentTypesQuery}>
        {(paymentMethods) => (
          <Grid>
            {paymentMethods
              .filter((type) => type.is_available)
              .map((feature) => (
                <FeatureItem
                  key={feature.id}
                  title={commonT(`paymentTypes.${feature.label}.title`)}
                >
                  <FontAwesomeIcon icon="exchange-alt" size="3x" />
                </FeatureItem>
              ))}
          </Grid>
        )}
      </QueryLoader>

      <SectionHead marginTop="xxl-size" title={t('delivery.title')} />
      <QueryLoader query={deliveryTypesQuery}>
        {(deliveryTypes) => (
          <Grid>
            {deliveryTypes
              .filter((type) => type.isAvailable)
              .map((type) => (
                <FeatureItem
                  key={type.id}
                  title={commonT(`deliveryTypes.${type.label}`)}
                  subtitle={`${displayMoney(type.price)} - ${type.time}`}
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
