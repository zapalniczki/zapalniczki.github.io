import { Formik, useFormikContext } from 'formik'
import { checkoutContext } from 'providers'
import React, { useContext, useState } from 'react'
import { FormValues } from '../useForm'
import Form from './Form'
import useForm from './useForm'

const Voucher = () => {
  const { voucher } = useContext(checkoutContext)
  const [codeApplied, setCodeApplied] = useState(!!voucher || false)

  const upperForm = useFormikContext<FormValues>()
  const { onSubmit, schema } = useForm(setCodeApplied)

  return (
    <Formik
      initialValues={{ voucher_id: upperForm.initialValues.voucher_id }}
      onSubmit={onSubmit}
      validateOnChange
      validationSchema={schema}
    >
      <Form codeApplied={codeApplied} upperForm={upperForm} />
    </Formik>
  )
}
export default Voucher
