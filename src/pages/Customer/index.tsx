import { Banner, Columns, Page, QueryLoader } from 'components'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import { CustomerProfile } from 'organisms'
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { object } from 'zod'
import RecentOrders from './RecentOrders'
import { DB_TABLES, Order, ROUTES, customer } from 'braty-common'
import { useQuery } from 'react-query'
import { getCustomerOrders, getUser } from 'api'
import Loader from './index.loader'
import { GetCustomerOrdersResponseItem } from 'models'
import { remoteConfigContext } from 'providers'

const Customer = () => {
  // TODO Add user auth here
  const { t } = useTranslation('CUSTOMER')
  const { customerContactDetails } = useContext(remoteConfigContext)

  useScrollTop()
  usePageTitle(t('title'))

  const location = useLocation()
  const locationState = locationStateSchema.safeParse(location.state)

  if (!locationState.success) {
    return <Navigate to={ROUTES.HOME} />
  }

  const queryParams = {
    email: locationState.data.email
  }
  const customerOrdersQuery = useQuery([DB_TABLES.CUSTOMERS, queryParams], () =>
    getCustomerOrders(queryParams)
  )

  // const params = { id: '92e2470c-8728-4671-b057-2b6f3c5d95f2' }
  // const temp = useQuery([DB_TABLES.USERS, params], () => getUser(params))

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

      <QueryLoader Loader={<Loader />} query={customerOrdersQuery}>
        {(data) => {
          const customerProfile = shapeData(data)

          return (
            <Columns>
              <div>
                <RecentOrders orders={customerProfile.orders} />
              </div>

              <div>
                {customerContactDetails ? (
                  <CustomerProfile
                    customerId={customerProfile.id}
                    hideProfileLink
                  />
                ) : null}
              </div>
            </Columns>
          )
        }}
      </QueryLoader>
    </Page>
  )
}

const locationStateSchema = object({
  email: customer.shape.email
})

const shapeData = (
  rawData: GetCustomerOrdersResponseItem[]
): GetCustomerOrdersResponseItem => {
  const customer = rawData[0]
  const allOrders: Order[] = rawData.map((customer) => customer.orders).flat()

  customer.orders = allOrders

  return customer
}

export default Customer
