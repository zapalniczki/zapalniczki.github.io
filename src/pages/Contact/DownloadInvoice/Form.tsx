import { FieldWrapper, Button, Flexbox, Input } from 'components'
import { Field, FieldProps } from 'formik'

import React from 'react'
import { useInput, useTranslation } from 'hooks'
import { ViewWrapper } from '.'
import { FormValues } from './useForm'
import TileHeading from '../TileHeading'

const Form = () => {
  const { t } = useTranslation('CONTACT')

  const { getInput } = useInput()

  return (
    <ViewWrapper>
      <TileHeading icon="receipt" title={t(`items.DOWNLOAD_INVOICE.title`)} />

      <Flexbox alignItems="flex-end" justifyContent="flex-end">
        <FieldWrapper>
          <Field name="order_id">
            {(props: FieldProps<string, FormValues>) => (
              <Input {...props} {...getInput('ORDER_ID', true)} />
            )}
          </Field>
        </FieldWrapper>

        <Button marginLeft="m-size" size="small" type="submit">
          {getInput('SUBMIT').label}
        </Button>
      </Flexbox>
    </ViewWrapper>
  )
}

export default Form
