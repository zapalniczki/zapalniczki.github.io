import { getOrder } from 'api'
import { Page, QueryLoader } from 'components'
import { ORDER_TABLE } from 'constants/db_tables'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import { Order } from 'models'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import ContactDetails from './ContactDetails'
import OrderId from './OrderId'
import Payment from './Payment'
import ProductsTable from './ProductsTable'
import Shipping from './Shipping'
import Status from './Status'

const Order = () => {
  const { t } = useTranslation('ORDER')

  const { id } = useParams<{ id: Order['id'] }>()

  useTabTitle(`${t('title')} ${id}`)
  useScrollTop()

  const params = { id }
  const orderQuery = useQuery([ORDER_TABLE, params], () => getOrder(params))

  return (
    <Page columns>
      <QueryLoader query={orderQuery}>
        {(order) => (
          <>
            <div>
              <OrderId id={order.id} />

              <Status status={order.status} />

              {order.status === 'CONFIRMED' && (
                <Payment amount={order.total} id={order.id} />
              )}

              <ProductsTable products={order.products} />
            </div>

            <div>
              <Shipping shipping={order.shipping} />

              <ContactDetails userId={order.user_id} />
            </div>
          </>
        )}
      </QueryLoader>
    </Page>
  )
}

export default Order
