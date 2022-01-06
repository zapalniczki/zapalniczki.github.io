import { Flexbox, Page, SectionHead, Tile } from 'components'
import { USER } from 'constants/routes'
import { Formik } from 'formik'
import { useScrollTop, usePageTitle, useTranslation } from 'hooks'
import { authContext } from 'providers'
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Form from './Form'
import useForm from './useForm'

const SignIn = () => {
  const { t } = useTranslation('SIGN_IN')
  const { isLoggedIn } = useContext(authContext)

  usePageTitle(t('title'))
  useScrollTop()

  const { initialValues, onSubmit, validationSchema } = useForm()

  if (isLoggedIn) {
    return <Navigate to={USER} />
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