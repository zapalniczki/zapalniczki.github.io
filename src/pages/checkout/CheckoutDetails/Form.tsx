import { Field, FieldProps } from 'formik'
import { getRequiredOrNot } from 'utils'
import React from 'react'
import { MobileInput, Input } from 'components'
import { useTranslation } from 'hooks'
import {
  City,
  Email,
  Fullname as FullName,
  Nip,
  Postcode as PostCode,
  Street,
  HourseNr,
  AddressCdn,
  IsCompany
} from 'types'
import { FormValues } from './useForm'
import Row from '../common/Row'
import FieldWrapper from '../common/FieldWrapper'

type Props = {
  isCompany: IsCompany
}
const Form = ({ isCompany: isCompany }: Props) => {
  const { t } = useTranslation('CHECKOUT_DETAILS')

  return (
    <>
      <Row>
        <FieldWrapper>
          <Field name="fullName" type="text">
            {(props: FieldProps<FullName, FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t(`form.fullName.label`), true)}
                placeholder={t(`form.fullName.placeholder`)}
              />
            )}
          </Field>
        </FieldWrapper>

        {isCompany && (
          <FieldWrapper>
            <Field name="nip" type="text">
              {(props: FieldProps<Nip, FormValues>) => (
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
          <Field name="postCode" type="text">
            {(props: FieldProps<PostCode, FormValues>) => (
              <Input
                {...props}
                label={getRequiredOrNot(t('form.postCode.label'), true)}
                maxLength={6}
                placeholder={t('form.postCode.placeholder')}
              />
            )}
          </Field>
        </FieldWrapper>

        <FieldWrapper>
          <Field name="city" type="text">
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

      <Row>
        <FieldWrapper>
          <Field name="email" type="email">
            {(props: FieldProps<Email, FormValues>) => (
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
            {(props: FieldProps<string, FormValues>) => (
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
