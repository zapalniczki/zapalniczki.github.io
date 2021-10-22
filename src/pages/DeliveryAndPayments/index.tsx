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
          description={t('processingTime.items.PRODUCTION.description')}
          icon="calendar-alt"
          title={t('processingTime.items.PRODUCTION.title')}
        />

        <Flexbox alignSelf="center">
          <FontAwesomeIcon icon="plus" size="3x" />
        </Flexbox>

        <Option
          description={t('processingTime.items.DELIVERY.description')}
          icon="truck-loading"
          title={t('processingTime.items.DELIVERY.title')}
        />

        <Flexbox alignSelf="center">
          <FontAwesomeIcon icon="equals" size="3x" />
        </Flexbox>

        <Option
          description={t('processingTime.items.TOTAL.description')}
          icon="boxes"
        />
      </Grid>

      <SectionHead marginTop="xxl-size" title={t('payments.title')} />

      <QueryLoader query={paymentTypesQuery}>
        {(paymentTypes) => (
          <Grid>
            {paymentTypes
              .filter((type) => type.is_enabled)
              .map((type) => (
                <FeatureItem key={type.id} title={type.label}>
                  <FontAwesomeIcon
                    icon={(type.frontend_icon_name ?? 'question') as IconName}
                    size="3x"
                  />
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
              .filter((type) => type.is_enabled)
              .map((type) => (
                <FeatureItem
                  key={type.id}
                  subtitle={`${displayMoney(type.price)} - ${type.time}`}
                  title={type.label}
                >
                  <FontAwesomeIcon
                    icon={(type.frontend_icon_name ?? 'question') as IconName}
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
