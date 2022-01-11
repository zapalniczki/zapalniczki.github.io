import { getUser } from 'api'
import { DB_TABLES, Order } from 'braty-common'
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
import React from 'react'
import { useQuery } from 'react-query'

type Props = {
  userId: Order['user_id']
}

const ContactDetails = ({ userId }: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  const params = { id: userId }
  const userQuery = useQuery([DB_TABLES.USERS, params], () => getUser(params))

  return (
    <QueryLoader query={userQuery}>
      {(data) => {
        const nip = data.nip

        return (
          <Tile>
            <SectionHead separator title={commonT('CONTACT_DETAILS.title')} />

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

              <Text marginTop="m-size" type="body-1">
                {data.email}
              </Text>

              <Text type="body-2">{data.phone}</Text>
            </Flexbox>

            <Separator />

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

            <Text fontWeight="bold" type="body-1">
              {/* eslint-disable-next-line react/jsx-newline */}
              {data.address.post_code}, {data.address.city}
            </Text>
          </Tile>
        )
      }}
    </QueryLoader>
  )
}

export default ContactDetails
