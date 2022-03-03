/* eslint-disable react/jsx-newline */
import { getCustomer } from 'api'
import { DB_TABLES, Order, ROUTES } from 'braty-common'
import {
  Flexbox,
  LabelledItem,
  QueryLoader,
  SectionHead,
  Separator,
  Text,
  Tile,
  CustomerAvatar
} from 'components'
import { useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import Loader from './index.loader'

type Props = {
  customerId: Order['customer_id']
  hideProfileLink?: boolean
}

const CustomerProfile = ({ customerId, hideProfileLink }: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  const params = { id: customerId }
  const customerQuery = useQuery([DB_TABLES.CUSTOMERS, params], () =>
    getCustomer(params)
  )
  const { customer } = useContext(remoteConfigContext)

  return (
    <QueryLoader Loader={<Loader />} query={customerQuery}>
      {(data) => {
        const nip = data.nip

        let profileLink = undefined
        if (customer && !hideProfileLink) {
          profileLink = {
            to: ROUTES.CUSTOMER,
            options: { state: { email: data.email } },
            label: commonT('CONTACT_DETAILS.profile')
          }
        }

        return (
          <Tile>
            <SectionHead
              link={profileLink}
              separator
              title={commonT('CONTACT_DETAILS.title')}
            />

            <Flexbox alignItems="center" flexDirection="column">
              <CustomerAvatar company={!!nip} />

              <Text
                fontWeight="bold"
                marginTop="m-size"
                textAlign="center"
                type="subtitle-1"
              >
                {data.full_name}
              </Text>

              <Text type="caption">
                {commonT(`customerTypes.${nip ? 'COMPANY' : 'INDIVIDUAL'}`)}
              </Text>
            </Flexbox>

            <Separator />

            <LabelledItem
              item={data.email}
              label={commonT('CONTACT_DETAILS.email')}
              marginBottom="m-size"
            />

            <LabelledItem
              item={data.phone}
              label={commonT('CONTACT_DETAILS.phone')}
              marginBottom="m-size"
            />

            {nip && (
              <LabelledItem
                item={nip}
                label={commonT('CONTACT_DETAILS.nip')}
                marginBottom="m-size"
              />
            )}

            <LabelledItem
              item={data.address.street_address}
              label={commonT('CONTACT_DETAILS.address')}
            />

            <Flexbox flexDirection="column">
              <Text fontWeight="bold" type="body-1">
                {data.address.post_code}, {data.address.city}
              </Text>

              <Text fontWeight="bold" type="body-1">
                {commonT(`COUNTRIES.${data.address.country}`)}
              </Text>
            </Flexbox>
          </Tile>
        )
      }}
    </QueryLoader>
  )
}

export { Loader as CustomerProfileLoader }
export default CustomerProfile
