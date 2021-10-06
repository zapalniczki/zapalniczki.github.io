import { Form as FormikForm, Formik } from 'formik'
import React from 'react'
import { Flexbox } from 'components'
import Form from './Form'
import Result from './Result'
import Error from './Error'
import useForm from './useForm'
import styled from 'styled-components'

const CheckStatus = () => {
  const { view, setView, schema, initialValues, onSubmit } = useForm()

  let content: JSX.Element
  if (view.view === 'RESULT') {
    content = <Result setView={setView} status={view.status} />
  } else if (view.view === 'ERROR') {
    content = <Error message={view.message} setView={setView} />
  } else {
    content = (
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

  return (
    <Flexbox justifyContent="space-between">
      {content}

      <Flexbox
        alignItems="center"
        justifyContent="center"
        marginLeft="xxxl-size"
      />
    </Flexbox>
  )
}

export const ViewWrapper = styled(Flexbox).attrs(() => ({
  width: '100%'
}))``

export default CheckStatus