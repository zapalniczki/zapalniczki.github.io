import { ROUTES } from 'braty-common'
import { Page, SectionHead, Tile } from 'components'
import { Formik } from 'formik'
import { usePageTitle, useScrollTop, useTranslation } from 'hooks'
import { authContext } from 'providers'
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Form from './Form'
import { Flexbox } from '@zapalniczki/shared-components'

import useForm from './useForm'

const SignIn = () => {
  const { t } = useTranslation('SIGN_IN')
  const { isLoggedIn } = useContext(authContext)

  usePageTitle(t('title'))
  useScrollTop()

  const { initialValues, onSubmit, validationSchema } = useForm()

  if (isLoggedIn) {
    return (
      <Navigate
        // TODO here is missing state
        to={ROUTES.CUSTOMER}
      />
    )
  }

  return (
    <Page>
      <Flexbox alignItems="center" justifyContent="center">
        <Tile width="50rem">
          <SectionHead separator title={t('title')} />

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validateOnChange
            validationSchema={validationSchema}
          >
            <Form />
          </Formik>
        </Tile>
      </Flexbox>
    </Page>
  )
}

export default SignIn
