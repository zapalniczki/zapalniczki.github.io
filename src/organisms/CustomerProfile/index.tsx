/* eslint-disable react/jsx-newline */
import { getCustomer } from 'api'
import { DB_TABLES, Order, ROUTES } from 'braty-common'
import {
  CustomerAvatar,
  Flexbox,
  LabelledItem,
  QueryLoader,
  SectionHead,
  Text,
  Tile
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

        let customerProfileLink = undefined
        if (customer && !hideProfileLink) {
          customerProfileLink = {
            to: ROUTES.CUSTOMER,
            options: { state: { email: data.email } },
            label: commonT('CONTACT_DETAILS.profile')
          }
        }

        return (
          <Tile padding={0}>
            <Tile alignItems="center" border="unset" paddingBottom="m-size">
              <SectionHead
                link={customerProfileLink}
                separator
                title={commonT('CONTACT_DETAILS.title')}
              />

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
            </Tile>

            <Tile
              backgroundColor="gray-light"
              border="unset"
              borderTopLeftRadius="unset"
              borderTopRightRadius="unset"
              paddingTop="m-size"
            >
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
          </Tile>
        )
      }}
    </QueryLoader>
  )
}

export { Loader as CustomerProfileLoader }
export default CustomerProfile
