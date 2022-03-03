import { Banner, Columns, Page, QueryLoader } from 'components'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import { CustomerProfile } from 'organisms'
import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { object } from 'zod'
import RecentOrders from './RecentOrders'
import { DB_TABLES, Order, ROUTES, user } from 'braty-common'
import { useQuery } from 'react-query'
import { getUserOrders } from 'api'
import Loader from './index.loader'
import { GetUserOrdersResponseItem } from 'models'
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
  const userOrdersQuery = useQuery([DB_TABLES.USERS, queryParams], () =>
    getUserOrders(queryParams)
  )

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

      <QueryLoader Loader={<Loader />} query={userOrdersQuery}>
        {(data) => {
          const userProfile = shapeData(data)

          return (
            <Columns>
              <div>
                <RecentOrders orders={userProfile.orders} />
              </div>

              <div>
                {customerContactDetails ? (
                  <CustomerProfile
                    customerId={userProfile.id}
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
  email: user.shape.email
})

const shapeData = (
  rawData: GetUserOrdersResponseItem[]
): GetUserOrdersResponseItem => {
  const user = rawData[0]
  const allOrders: Order[] = rawData.map((user) => user.orders).flat()

  user.orders = allOrders

  return user
}

export default Customer
