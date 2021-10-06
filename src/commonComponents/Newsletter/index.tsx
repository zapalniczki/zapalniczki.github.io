import { Box, Banner, Button, Flexbox, Heading, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import Form from './Form'
import useForm from './useForm'
import { Formik, Form as FormikForm } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'

const Newsletter = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { initialValues, onSubmit, schema, setView, view } = useForm()
  const { colors } = useTheme()

  let title = commonT('NEWSLETTER.FORM.title')
  let subtitle = commonT('NEWSLETTER.FORM.subtitle')

  let content = (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnChange
      validationSchema={schema}
    >
      {({ handleSubmit }) => (
        <>
          <FormikForm onSubmit={handleSubmit} style={{ width: '100%' }}>
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
    <Banner horizonal marginTop="xxl-size" medium>
      <Flexbox
        flexDirection="column"
        height="100%"
        justifyContent="flex-start"
        width="100%"
      >
        <Flexbox alignItems="center">
          {view.view === 'SUCCESS' && (
            <FontAwesomeIcon
              color={colors.green}
              icon="check-circle"
              size="2x"
            />
          )}

          {view.view === 'ERROR' && (
            <FontAwesomeIcon color={colors.red} icon="times-circle" size="2x" />
          )}

          <Heading level={4} marginLeft={view.view !== 'FORM' ? 'm-size' : 0}>
            {title}
          </Heading>
        </Flexbox>

        <Text marginBottom="m-size" marginTop="s-size" type="body-2">
          {subtitle}
        </Text>

        {content}
      </Flexbox>
    </Banner>
  )
}

export default Newsletter
