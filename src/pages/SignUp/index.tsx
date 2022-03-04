import { Flexbox, Page, SectionHead, Tile } from 'components'
import { Formik } from 'formik'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import { authContext } from 'providers'
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Form from './Form'
import useForm from './useForm'
import Success from './Success'
import { ROUTES } from 'braty-common'

const SignUp = () => {
  const { t } = useTranslation('SIGN_UP')
  const { isLoggedIn } = useContext(authContext)

  usePageTitle(t('title'))
  useScrollTop()

  const { initialValues, onSubmit, validationSchema, view } = useForm()

  if (isLoggedIn) {
    return <Navigate to={ROUTES.CUSTOMER} />
  }

  if (view === 'SUCCESS') {
    return <Success />
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

export default SignUp
