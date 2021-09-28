import { Button, Flexbox, Page } from 'components'
import { HOME } from 'constants/routes'
import { useScrollTop, useTabTitle } from 'hooks'
import React from 'react'
import { useTranslation } from 'hooks'
import { useHistory } from 'react-router-dom'

const PageNotFound = () => {
  const history = useHistory()
  const { t } = useTranslation('PAGE_NOT_FOUND')

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
        <h1>{t('title')}</h1>

        <Button
          marginTop="3rem"
          onClick={() => history.push(HOME)}
          type="button"
        >
          {t('buttonLabel')}
        </Button>
      </Flexbox>
    </Page>
  )
}

export default PageNotFound
