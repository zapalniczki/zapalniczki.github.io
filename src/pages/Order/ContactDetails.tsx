import { getUser } from 'api'
import {
  Flexbox,
  Separator,
  QueryLoader,
  SectionHead,
  Text,
  Tile,
  UserAvatar
} from 'components'
import { USERS_TABLE } from 'constants/db_tables'
import { useTranslation } from 'hooks'
import { Order } from 'models'
import React from 'react'
import { useQuery } from 'react-query'

type Props = {
  userId: Order['user_id']
}

const ContactDetails = ({ userId }: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const t = useTranslation('ORDER').withBase('SECTIONS.CONTACT_DETAILS')

  const params = { id: userId }
  const userQuery = useQuery([USERS_TABLE, params], () => getUser(params))

  return (
    <QueryLoader query={userQuery}>
      {(data) => (
        <Tile>
          <SectionHead separator title={t('title')} />

          <Flexbox alignItems="center" flexDirection="column">
            <UserAvatar />

            <Text
              fontWeight="bold"
              marginTop="m-size"
              textAlign="center"
              type="subtitle-1"
            >
              {data.full_name}
            </Text>

            <Text type="caption">
              {commonT(
                `customerTypes.${data.is_company ? 'COMPANY' : 'INDIVIDUAL'}`
              )}
            </Text>

            <Text marginTop="m-size" type="body-1">
              {data.email}
            </Text>

            <Text type="body-2">{data.phone}</Text>
          </Flexbox>

          <Separator />

          {data.is_company && (
            <>
              <Text type="body-2">{t('nip')}</Text>

              <Text marginBottom="m-size" type="body-1">
                {data.nip}
              </Text>
            </>
          )}

          <Text type="body-2">{t('address')}</Text>

          <Text type="body-1">{data.address.street_address}</Text>

          <Text type="body-1">
            {/* eslint-disable-next-line react/jsx-newline */}
            {data.address.post_code}, {data.address.city}
          </Text>
        </Tile>
      )}
    </QueryLoader>
  )
}

export default ContactDetails
