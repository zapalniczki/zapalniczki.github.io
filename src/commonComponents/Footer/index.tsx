import { Box, Flexbox, Link, Logo, MaxWidth, Separator, Text } from 'components'
import * as Routes from 'constants/routes'
import { useTranslation } from 'hooks'

import React from 'react'

const Footer = () => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <Flexbox
      alignItems="center"
      backgroundColor="off-white"
      flexDirection="column"
      paddingY="l-size"
    >
      <MaxWidth alignItems="flex-start" flexDirection="column">
        <Box marginLeft="-1rem">
          <Logo />
        </Box>

        <Flexbox
          alignItems="flex-start"
          flexDirection="column"
          marginTop="l-size"
        >
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              <Text marginY="xs-size" type="body-1">
                {commonT(`FOOTER.links.${link.label}`)}
              </Text>
            </Link>
          ))}
        </Flexbox>

        <Separator marginY="l-size" />

        <Flexbox justifyContent="space-between" width="100%">
          <Text type="caption">
            {commonT('FOOTER.allRightsReserved', {
              year: new Date().getFullYear()
            })}
          </Text>

          <Link to={Routes.DOCUMENTS}>
            <Text type="caption">{commonT('FOOTER.documents')}</Text>
          </Link>
        </Flexbox>
      </MaxWidth>
    </Flexbox>
  )
}

const links = [
  {
    label: 'home',
    to: Routes.HOME
  },
  {
    label: 'products',
    to: Routes.PRODUCTS
  },
  {
    label: 'howToCreateOrder',
    to: Routes.HOW_TO_CREATE_ORDER
  },
  {
    label: 'deliveryAndPayments',
    to: Routes.DELIVERY_AND_PAYMENTS
  },
  {
    label: 'contact',
    to: Routes.CONTACT
  }
]

export default Footer
