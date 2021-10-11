import { Input } from 'components'
import { Field, FieldProps } from 'formik'
import React from 'react'
import { useTranslation } from 'hooks'
import { AddressCdn, City, HourseNr, PostCode, Street } from 'types/index2'
import { FormValues } from './useForm'
import FieldWrapper from '../common/FieldWrapper'
import Row from '../common/Row'

const Form = () => {
  const { t } = useTranslation('CHECKOUT_SHIPPING')

  return (
    <>
      <Row>
        <FieldWrapper width="75%">
          <Field name="street">
            {(props: FieldProps<Street, FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t('form.street.label'), true)}
                placeholder={t('form.street.placeholder')}
              />
            )}
          </Field>
        </FieldWrapper>
        <FieldWrapper width="25%">
          <Field name="streetNo" type="text">
            {(props: FieldProps<HourseNr, FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t('form.streetNr.label'), true)}
                placeholder={t('form.streetNr.placeholder')}
              />
            )}
          </Field>
        </FieldWrapper>
      </Row>

      <Row>
        <FieldWrapper>
          <Field name="addressCdn" type="text">
            {(props: FieldProps<AddressCdn, FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t('form.addressCdn.label'))}
                maxLength={6}
                placeholder={t('form.addressCdn.placeholder')}
              />
            )}
          </Field>
        </FieldWrapper>
      </Row>

      <Row>
        <FieldWrapper>
          <Field name="postCode">
            {(props: FieldProps<PostCode, FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t('form.postCode.label'), true)}
                placeholder={t('form.postCode.placeholder')}
              />
            )}
          </Field>
        </FieldWrapper>

        <FieldWrapper>
          <Field name="city">
            {(props: FieldProps<City, FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t('form.city.label'), true)}
                placeholder={t('form.city.placeholder')}
              />
            )}
          </Field>
        </FieldWrapper>
      </Row>
    </>
  )
}

const getRequiredOrNot = (label: string, required?: boolean) =>
  `${required ? '* ' : ''}${label}`

export default Form
