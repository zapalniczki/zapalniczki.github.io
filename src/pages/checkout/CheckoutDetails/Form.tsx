import { Field, FieldProps } from 'formik'
import { getRequiredOrNot } from 'utils'
import React from 'react'
import { MobileInput, Input } from 'components'
import { useTranslation } from 'hooks'
import { FormValues } from './useForm'
import Row from '../common/Row'
import FieldWrapper from '../common/FieldWrapper'
import { User } from 'models'

type Props = {
  isCompany: User['is_company']
}
const Form = ({ isCompany }: Props) => {
  const { t } = useTranslation('CHECKOUT_DETAILS')

  const name = isCompany ? 'company' : 'full_name'

  return (
    <>
      <Row>
        <FieldWrapper>
          <Field name="full_name" type="text">
            {(props: FieldProps<FormValues['full_name'], FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t(`form.${name}.label`), true)}
                placeholder={t(`form.${name}.placeholder`)}
              />
            )}
          </Field>
        </FieldWrapper>

        {isCompany && (
          <FieldWrapper>
            <Field name="nip" type="text">
              {(props: FieldProps<string, FormValues>) => (
                <Input
                  {...props}
                  label={getRequiredOrNot(t('form.nip.label'), true)}
                  maxLength={10}
                  placeholder={t('form.nip.placeholder')}
                />
              )}
            </Field>
          </FieldWrapper>
        )}
      </Row>

      <Row>
        <FieldWrapper width="75%">
          <Field name="street" type="text">
            {(props: FieldProps<FormValues['street'], FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t('form.street.label'), true)}
                placeholder={t('form.street.placeholder')}
              />
            )}
          </Field>
        </FieldWrapper>

        <FieldWrapper width="25%">
          <Field name="street_nr" type="text">
            {(props: FieldProps<FormValues['street_nr'], FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t('form.street_nr.label'), true)}
                placeholder={t('form.street_nr.placeholder')}
              />
            )}
          </Field>
        </FieldWrapper>
      </Row>

      <Row>
        <FieldWrapper>
          <Field name="address_cdn" type="text">
            {(props: FieldProps<FormValues['address_cdn'], FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t('form.address_cdn.label'))}
                maxLength={6}
                placeholder={t('form.address_cdn.placeholder')}
              />
            )}
          </Field>
        </FieldWrapper>
      </Row>

      <Row>
        <FieldWrapper>
          <Field name="post_code" type="text">
            {(props: FieldProps<FormValues['post_code'], FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t('form.post_code.label'), true)}
                maxLength={6}
                placeholder={t('form.post_code.placeholder')}
              />
            )}
          </Field>
        </FieldWrapper>

        <FieldWrapper>
          <Field name="city" type="text">
            {(props: FieldProps<FormValues['city'], FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t('form.city.label'), true)}
                placeholder={t('form.city.placeholder')}
              />
            )}
          </Field>
        </FieldWrapper>
      </Row>

      <Row>
        <FieldWrapper>
          <Field name="email" type="email">
            {(props: FieldProps<FormValues['email'], FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t('form.email.label'), true)}
                placeholder={t('form.email.placeholder')}
              />
            )}
          </Field>
        </FieldWrapper>

        <FieldWrapper>
          <Field name="phone">
            {(props: FieldProps<FormValues['phone'], FormValues>) => (
              <MobileInput
                fieldProps={props}
                label={getRequiredOrNot(t('form.phone.label'), true)}
              />
            )}
          </Field>
        </FieldWrapper>
      </Row>
    </>
  )
}

export default Form
