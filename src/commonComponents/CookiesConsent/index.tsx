import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flexbox, MaxWidth, Text } from 'components'
import { useBreakpoints, useTranslation } from 'hooks'
import React from 'react'
import CookieConsent from 'react-cookie-consent'
import styled, { useTheme } from 'styled-components'
import breakpoints from 'styles/breakpoints'
import getSpace from 'styles/getSpace'

const CookiesConsent = () => {
  const commonT = useTranslation('COMMON').withBase('COOKIES_CONSENT')
  const { colors } = useTheme()

  const isDesktop = useBreakpoints('desktop')

  return (
    <Flexbox
      backgroundColor="banner-color"
      bottom="0"
      justifyContent="center"
      position="fixed"
      width="100%"
      zIndex={999}
    >
      <Container>
        <CookieConsent
          buttonText={commonT('agree')}
          contentClasses="content-wrapper-class"
        >
          <MaxWidth alignItems="center" flexDirection="row">
            {isDesktop && (
              <FontAwesomeIcon
                color={colors['dark-color']}
                icon="cookie-bite"
                size="2x"
              />
            )}

            <Text
              marginLeft="m-size"
              textAlign={isDesktop ? 'unset' : 'center'}
              type="body-2"
            >
              {commonT('info')}
            </Text>
          </MaxWidth>
        </CookieConsent>
      </Container>
    </Flexbox>
  )
}

const Container = styled(MaxWidth)`
  .CookieConsent {
    gap: ${(props) => `0 ${getSpace('m-size')(props)}`};
    flex-direction: column;
  }

  .content-wrapper-class {
    flex: unset !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-top: ${getSpace('m-size')}!important;
    margin-bottom: ${getSpace('m-size')}!important;
  }

  #rcc-confirm-button {
    font-family: 'Roboto';
    padding: ${getSpace('s-size')};
    margin: 0 !important;
    margin-bottom: ${getSpace('m-size')} !important;
    padding: ${getSpace('s-size')} !important;
  }

  ${breakpoints('desktop')`
    .CookieConsent {
      flex-direction: row;
    }

    #rcc-confirm-button {
      margin: 0;
      margin-bottom: 0 !important;
    }
  `}
`

export default CookiesConsent
