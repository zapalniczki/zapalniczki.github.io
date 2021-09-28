import { Banner, Flexbox, Heading, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import Form from './Form'
import useForm from './useForm'
import { Formik, Form as FormikForm } from 'formik'
import { SpaceProps } from 'styled-system'

type Props = SpaceProps

const CallMeBack = (props: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const { view, schema, initialValues, onSubmit } = useForm()

  let title = commonT('CALL_ME_BACK.FORM.title')
  let subtitle = commonT('CALL_ME_BACK.FORM.subtitle')

  let content = (
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

  if (view.view === 'SUCCESS') {
    content = <></>
    title = commonT('CALL_ME_BACK.SUCCESS.title')
    subtitle = commonT('CALL_ME_BACK.SUCCESS.subtitle')
  }

  return (
    <Banner horizonal small {...props}>
      <Flexbox
        flexDirection="column"
        height="100%"
        justifyContent="flex-start"
        width="100%"
      >
        <Heading level={4}>{title}</Heading>

        <Text marginBottom="m-size" type="body-2">
          {subtitle}
        </Text>

        {content}
      </Flexbox>
    </Banner>
  )
}

export default CallMeBack
