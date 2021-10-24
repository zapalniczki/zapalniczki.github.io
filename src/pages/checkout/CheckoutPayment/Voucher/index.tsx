import useForm from './useForm'
import { Formik } from 'formik'
import React from 'react'
import Form from './Form'

const Voucher = () => {
  const { initialValues, onSubmit, schema } = useForm()

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnChange
      validationSchema={schema}
    >
      <Form />
    </Formik>
  )
}
export default Voucher
