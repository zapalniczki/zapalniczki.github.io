/* eslint-disable react/jsx-newline */
import { getUser } from 'api'
import { DB_TABLES, Order, ROUTES } from 'braty-common'
import {
  Flexbox,
  LabelledItem,
  QueryLoader,
  SectionHead,
  Separator,
  Text,
  Tile,
  UserAvatar
} from 'components'
import { useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import Loader from './ContactDetails.loader'

type Props = {
  hideProfileLink?: boolean
  userId: Order['customer_id']
}

// TODO Should be renamed to ¬User/Customer Profile
const ContactDetails = ({ hideProfileLink, userId }: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  const params = { id: userId }
  const userQuery = useQuery([DB_TABLES.USERS, params], () => getUser(params))
  const { customer } = useContext(remoteConfigContext)

  return (
    <QueryLoader Loader={<Loader />} query={userQuery}>
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
              <UserAvatar company={!!nip} />

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

export default ContactDetails
