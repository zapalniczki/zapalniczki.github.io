import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MaxWidth, Text } from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

import { useBreakpoints, useTranslation } from 'hooks'
import { Loader } from 'providers'
import React, { useState } from 'react'
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent'
import styled, { useTheme } from 'styled-components'
import { breakpoints, getSpace } from 'styles'

const CookiesConsent = () => {
  const commonT = useTranslation('COMMON').withBase('COOKIES_CONSENT')
  const { colors } = useTheme()

  const isAboveDesktop = useBreakpoints('desktop max')

  const initialCookieConsent = getCookieConsentValue()
  const [cookieConsent, setCookieConsent] = useState(initialCookieConsent)

  if (cookieConsent) {
    return null
  }

  return (
    <Loader>
      <Flexbox
        backgroundColor="gray-light"
        bottom="0"
        justifyContent="center"
        left="0"
        position="fixed"
        width="100%"
        zIndex={999}
      >
        <Container>
          <CookieConsent
            buttonText={commonT('agree')}
            contentClasses="content-wrapper-class"
            onAccept={() => {
              const currentCookieConsent = getCookieConsentValue()

              return setCookieConsent(currentCookieConsent)
            }}
          >
            <MaxWidth alignItems="center" flexDirection="row">
              {isAboveDesktop && (
                <FontAwesomeIcon
                  color={colors['dark-color']}
                  icon="cookie-bite"
                  size="2x"
                />
              )}

              <Text
                marginLeft="m-size"
                textAlign={isAboveDesktop ? 'unset' : 'center'}
                type="body-2"
              >
                {commonT('info')}
              </Text>
            </MaxWidth>
          </CookieConsent>
        </Container>
      </Flexbox>
    </Loader>
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

  ${breakpoints('desktop max')`
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
