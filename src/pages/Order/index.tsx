import { getOrder } from 'api'
import { DB_TABLES, Order } from 'braty-common'
import { Columns, Page, QueryLoader } from 'components'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import { ContactDetails } from 'organisms'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import Actions from './Actions'
import Billing from './Billing'
import Details from './Details'
import Id from './Id'
import Loader from './index.loader'
import Invoice from './Invoice'
import Payment from './Payment'
import Products from './Products'
import Shipping from './Shipping'
import Status from './Status'
import Voucher from './Voucher'

const Order = () => {
  const { t } = useTranslation('ORDER')
  const { id } = useParams<'id'>()
  const { orderContactDetails } = useContext(remoteConfigContext)

  usePageTitle(`${t('title')} ${id}`)
  useScrollTop()

  if (!id) {
    throw new Error('No id')
  }

  const params = { id }
  const orderQuery = useQuery([DB_TABLES.ORDER, params], () => getOrder(params))

  return (
    <Page>
      <QueryLoader Loader={<Loader />} query={orderQuery}>
        {(order) => (
          <Columns>
            <div>
              <Id id={order.id} />

              <Status status={order.status} />

              <Payment
                id={order.id}
                status={order.status}
                total_en={order.total_en}
                total_pl={order.total_pl}
              />

              {order.status === 'COMPLETED' && (
                <Invoice invoice={order.invoice} />
              )}

              <Billing
                delivery_price_en={order.delivery_price_en}
                delivery_price_pl={order.delivery_price_pl}
                discount_en={order.discount_en}
                discount_pl={order.discount_pl}
                payment_price_en={order.payment_price_en}
                payment_price_pl={order.payment_price_pl}
                products_price_en={order.products_price_en}
                products_price_pl={order.products_price_pl}
                total_en={order.total_en}
                total_pl={order.total_pl}
              />

              <Voucher voucher={order.voucher} />

              <Products products={order.products} />

              {order.status !== 'COMPLETED' && (
                <Invoice invoice={order.invoice} />
              )}
            </div>

            <div>
              <Actions products={order.products} status={order.status} />

              <Details
                created_at={order.created_at}
                products={order.products}
                updated_at={order.updated_at}
              />

              <Shipping
                deliveryType={order.delivery_type}
                parcel={order.parcel}
                shipping={order.shipping}
              />

              {orderContactDetails && <ContactDetails userId={order.user_id} />}
            </div>
          </Columns>
        )}
      </QueryLoader>
    </Page>
  )
}

export default Order
