import { Button, FieldWrapper, Input } from 'components'
import { Field, FieldProps } from 'formik'
import { useInput, useTranslation } from 'hooks'
import React from 'react'
import { ViewWrapper } from '.'
import TileContent from '../TileContent'
import TileHeading from '../TileHeading'
import { FormValues } from './useForm'

const Form = () => {
  const { t } = useTranslation('CONTACT')
  const { getInput } = useInput()

  return (
    <ViewWrapper>
      <TileHeading icon="question" title={t(`items.CHECK_STATUS.title`)} />

      <TileContent
        alignItems={['unset', 'flex-start', 'flex-end']}
        flexDirection={['unset', 'column', 'row']}
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
          marginLeft={['unset', 0, 'm-size']}
          marginTop={['unset', 'm-size', 0]}
          size="small"
          type="submit"
        />
      </TileContent>
    </ViewWrapper>
  )
}

export default Form
