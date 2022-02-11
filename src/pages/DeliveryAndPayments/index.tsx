import { IconName } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getDeliveryTypes, getPaymentTypes } from 'api'
import { DB_TABLES } from 'braty-common'
import { ReadTermsAndConditions } from 'commonComponents'
import {
  Banner,
  FeatureItem,
  Flexbox,
  Grid,
  Page,
  ProductsGridLoader,
  QueryLoader,
  SectionHead
} from 'components'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'
import { displayMoney, getLanguageLabel, getLanguagePrice } from 'utils'
import Option from './Option'

const DeliveryAndPayments = () => {
  const { currentLanguage, t } = useTranslation('DELIVERY_AND_PAYMENTS')

  useScrollTop()
  usePageTitle(t('title'))

  const deliveryTypesQuery = useQuery(DB_TABLES.DELIVERY_TYPES, () =>
    getDeliveryTypes()
  )

  const paymentTypesQuery = useQuery(DB_TABLES.PAYMENT_TYPE, () =>
    getPaymentTypes()
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

      <QueryLoader Loader={<ProductsGridLoader />} query={deliveryTypesQuery}>
        {(deliveryTypes) => (
          <Grid gridTemplateColumns={['unset', '1fr', '1fr', 'repeat(3, 1fr)']}>
            {deliveryTypes.map((type) => {
              const price = getLanguagePrice({
                language: currentLanguage,
                price: type
              })

              return (
                <FeatureItem
                  key={type.id}
                  subtitle={`${displayMoney(price)} - ${type.description_pl}`}
                  title={type.label_pl}
                >
                  <FontAwesomeIcon
                    icon={type.icon_name as IconName}
                    size="3x"
                  />
                </FeatureItem>
              )
            })}
          </Grid>
        )}
      </QueryLoader>

      <SectionHead marginTop="xxl-size" title={t('payments.title')} />

      <QueryLoader Loader={<ProductsGridLoader />} query={paymentTypesQuery}>
        {(paymentTypes) => (
          <Grid gridTemplateColumns={['unset', '1fr', '1fr', 'repeat(3, 1fr)']}>
            {paymentTypes.map((type) => {
              const label = getLanguageLabel({
                language: currentLanguage,
                label: type
              })

              const description = getLanguageLabel({
                language: currentLanguage,
                label: type,
                description: true
              })

              return (
                <FeatureItem
                  key={type.id}
                  subtitle={`${displayMoney(type.price)} - ${description}`}
                  title={label}
                >
                  <FontAwesomeIcon
                    icon={type.icon_name as IconName}
                    size="3x"
                  />
                </FeatureItem>
              )
            })}
          </Grid>
        )}
      </QueryLoader>

      <ReadTermsAndConditions />
    </Page>
  )
}
export default DeliveryAndPayments
