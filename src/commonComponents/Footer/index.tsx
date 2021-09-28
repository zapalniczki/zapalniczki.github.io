import { Box, Flexbox, Link, Logo, MaxWidth, Separator, Text } from 'components'
import { DOCUMENTS } from 'constants/routes'
import { useAdmin, useTranslation } from 'hooks'

import React from 'react'
import adminLinks from './adminLinks'
import links from './links'

const Footer = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { isAdmin } = useAdmin()

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

        <Flexbox justifyContent="space-between" marginTop="l-size" width="100%">
          <Flexbox alignItems="flex-start" flexDirection="column">
            {links.map((link) => (
              <Link key={link.to} to={link.to}>
                <Text marginY="xs-size" type="body-1">
                  {commonT(`FOOTER.links.${link.label}`)}
                </Text>
              </Link>
            ))}
          </Flexbox>

          {isAdmin && (
            <Flexbox alignItems="flex-start" flexDirection="column">
              {adminLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  <Text marginY="xs-size" type="body-1">
                    {commonT(`FOOTER.adminLinks.${link.label}`)}
                  </Text>
                </Link>
              ))}
            </Flexbox>
          )}
        </Flexbox>

        <Separator marginY="l-size" />

        <Flexbox justifyContent="space-between" width="100%">
          <Text type="caption">
            {commonT('FOOTER.allRightsReserved', {
              year: new Date().getFullYear()
            })}
          </Text>

          <Link to={DOCUMENTS}>
            <Text type="caption">{commonT('FOOTER.documents')}</Text>
          </Link>
        </Flexbox>
      </MaxWidth>
    </Flexbox>
  )
}

export default Footer
