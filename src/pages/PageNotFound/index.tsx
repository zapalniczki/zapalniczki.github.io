import { Button, Flexbox, Heading, Page } from 'components'
import { HOME } from 'constants/routes'
import { useScrollTop, useTabTitle } from 'hooks'
import React from 'react'
import { useTranslation } from 'hooks'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'

const PageNotFound = () => {
  const history = useHistory()
  const { t } = useTranslation('PAGE_NOT_FOUND')
  const { colors } = useTheme()

  useScrollTop()
  useTabTitle(t('title'))

  return (
    <Page>
      <Flexbox
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        minHeight="50rem"
        padding="xxl-size"
      >
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
          onClick={() => history.push(HOME)}
          size="small"
          type="button"
        />
      </Flexbox>
    </Page>
  )
}

export default PageNotFound
