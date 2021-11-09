import { getOrder } from 'api'
import { Columns, Page, QueryLoader } from 'components'
import { ORDER_TABLE } from 'constants/db_tables'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import { Order } from 'models'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import Billing from './Billing'
import { ContactDetails } from 'organisms'
import Details from './Details'
import Invoice from './Invoice'
import OrderId from './OrderId'
import Payment from './Payment'
import Voucher from './Voucher'
import ProductsTable from './ProductsTable'
import Shipping from './Shipping'
import Status from './Status'
import ParcelDetails from './ParcelDetails'

const Order = () => {
  const { t } = useTranslation('ORDER')

  const { id } = useParams<{ id: Order['id'] }>()

  useTabTitle(`${t('title')} ${id}`)
  useScrollTop()

  const params = { id }
  const orderQuery = useQuery([ORDER_TABLE, params], () => getOrder(params))

  return (
    <Page>
      <QueryLoader query={orderQuery}>
        {(order) => (
          <Columns>
            <div>
              <OrderId id={order.id} />

              <Status status={order.status} />

              <Payment
                id={order.id}
                status={order.status}
                total={order.total}
              />

              {order.status === 'COMPLETED' && (
                <Invoice invoice={order.invoice} />
              )}

              <Billing
                delivery_price={order.delivery_price}
                discount={order.discount}
                payment_price={order.payment_price}
                products_price={order.products_price}
                total={order.total}
              />

              <Voucher voucher={order.voucher} />

              <ProductsTable products={order.products} />

              {order.status !== 'COMPLETED' && (
                <Invoice invoice={order.invoice} />
              )}
            </div>

            <div>
              <Details
                created_at={order.created_at}
                products={order.products}
                updated_at={order.updated_at}
              />

              <ParcelDetails parcel={order.parcel} />

              <Shipping
                deliveryType={order.delivery_type}
                shipping={order.shipping}
              />

              <ContactDetails userId={order.user_id} />
            </div>
          </Columns>
        )}
      </QueryLoader>
    </Page>
  )
}

export default Order
