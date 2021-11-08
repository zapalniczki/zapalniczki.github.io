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
      <TileHeading
        icon="file-invoice"
        title={t(`items.DOWNLOAD_INVOICE.title`)}
      />

      <Flexbox
        alignItems={['unset', 'flex-start', 'flex-start', 'flex-end']}
        flexDirection={['unset', 'column', 'column', 'row']}
        justifyContent="flex-end"
      >
        <FieldWrapper>
          <Field name="order_id">
            {(props: FieldProps<string, FormValues>) => (
              <Input {...props} {...getInput('ORDER_ID', true)} />
            )}
          </Field>
        </FieldWrapper>

        <Button
          label={getInput('SUBMIT').label}
          marginLeft={['unset', 0, 0, 'm-size']}
          marginTop={['unset', 'm-size', 'm-size', 0]}
          size="small"
          type="submit"
        />
      </Flexbox>
    </ViewWrapper>
  )
}

export default Form
