import { Banner, Columns, Page } from 'components'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import { ContactDetails } from 'organisms'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { object } from 'zod'
import Orders from './Orders'
import { ROUTES, user } from 'braty-common'

const User = () => {
  // TODO Add user auth here
  const { t } = useTranslation('USER')

  useScrollTop()
  usePageTitle(t('title'))

  const location = useLocation()
  const locationState = locationStateSchema.safeParse(location.state)

  if (!locationState.success) {
    return <Navigate to={ROUTES.HOME} />
  }

  return (
    <Page>
      <Banner marginBottom="xxl-size" size="SMALL" title={t('title')} />

      <Columns>
        <div>
          <Orders />
        </div>

        <div>
          <ContactDetails hideProfileLink userId={locationState.data.id} />
        </div>
      </Columns>
    </Page>
  )
}

const locationStateSchema = object({
  id: user.shape.id
})

export default User
