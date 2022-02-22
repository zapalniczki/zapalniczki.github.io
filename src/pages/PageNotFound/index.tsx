import { Button, Flexbox, Heading, Page, Spinner } from 'components'
import { ROUTES } from 'braty-common'
import { useScrollTop, usePageTitle } from 'hooks'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'hooks'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'

const PageNotFound = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('PAGE_NOT_FOUND')
  const { colors } = useTheme()

  const [spinnerVisible, setSpinnerVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSpinnerVisible(false)
    }, 1500)
  }, [])

  useScrollTop()
  usePageTitle(t('title'))

  return (
    <Page>
      <Flexbox
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        minHeight="50rem"
        padding="xxl-size"
      >
        {spinnerVisible ? (
          <Flexbox alignItems="center" justifyContent="center">
            <Spinner />
          </Flexbox>
        ) : (
          <>
            <Flexbox alignItems="center">
              <FontAwesomeIcon
                color={colors['braty-red']}
                icon="exclamation-triangle"
                size="5x"
              />

              <Heading color="braty-red" level={4} marginLeft="l-size">
                {t('heading')}
              </Heading>
            </Flexbox>

            <Button
              label={t('buttonLabel')}
              marginTop="xxxl-size"
              onClick={() => navigate(ROUTES.HOME)}
              size="large"
              type="button"
            />
          </>
        )}
      </Flexbox>
    </Page>
  )
}

export default PageNotFound
