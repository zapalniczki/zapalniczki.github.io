import { Form as FormikForm, Formik } from 'formik'
import React from 'react'
import { Flexbox } from '@zapalniczki/shared-components'
import Form from './Form'
import Result from './Result'
import Error from './Error'
import useForm from './useForm'
import styled from 'styled-components'

const CheckStatus = () => {
  const { initialValues, onSubmit, schema, setView, view } = useForm()

  if (view.view === 'RESULT') {
    return <Result id={view.id} setView={setView} status={view.status} />
  } else if (view.view === 'ERROR') {
    return <Error message={view.message} setView={setView} />
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnChange
      validationSchema={schema}
    >
      {({ handleSubmit }) => (
        <FormikForm onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Form />
        </FormikForm>
      )}
    </Formik>
  )
}

export const ViewWrapper = styled(Flexbox)`
  width: 100%;
  flex-direction: column;
`

export default CheckStatus
