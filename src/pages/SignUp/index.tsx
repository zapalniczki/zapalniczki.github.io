import { Flexbox, Page, SectionHead, Tile } from 'components'
import { USER } from 'constants/routes'
import { Formik } from 'formik'
import { useScrollTop, useTabTitle, useTranslation } from 'hooks'
import { authContext } from 'providers'
import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Form from './Form'
import useForm from './useForm'

const SignUp = () => {
  const { t } = useTranslation('SIGN_UP')
  const { isLoggedIn } = useContext(authContext)

  useTabTitle(t('title'))
  useScrollTop()

  const { initialValues, onSubmit, validationSchema } = useForm()

  if (isLoggedIn) {
    return <Redirect to={USER} />
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
