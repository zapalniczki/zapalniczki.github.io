import { Box, Banner, Button, Flexbox, Heading, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import Form from './Form'
import useForm from './useForm'
import { Formik, Form as FormikForm } from 'formik'

const Newsletter = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { view, schema, initialValues, onSubmit, setView } = useForm()

  let title = commonT('NEWSLETTER.FORM.title')
  let subtitle = commonT('NEWSLETTER.FORM.subtitle')

  let content = (
    <Formik
      initialValues={initialValues}
      validateOnChange
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <>
          <FormikForm style={{ width: '100%' }} onSubmit={handleSubmit}>
            <Form />
          </FormikForm>
          <Text marginTop="xxs-size" type="caption">
            {commonT('NEWSLETTER.FORM.info')}
          </Text>
        </>
      )}
    </Formik>
  )

  if (view.view === 'SUCCESS') {
    content = <></>
    title = commonT('NEWSLETTER.SUCCESS.title')
    subtitle = commonT('NEWSLETTER.SUCCESS.subtitle')
  }

  if (view.view === 'ERROR') {
    content = (
      <Box>
        <Button
          onClick={() => setView({ view: 'FORM' })}
          size="small"
          variant="primary"
        >
          {commonT('NEWSLETTER.ERROR.tryAgain')}
        </Button>
      </Box>
    )
    title = commonT('NEWSLETTER.ERROR.title')
    subtitle = commonT(view.message)
  }

  return (
    <Banner marginTop="xxl-size" horizonal medium>
      <Flexbox
        justifyContent="flex-start"
        flexDirection="column"
        width="100%"
        height="100%"
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

export default Newsletter
