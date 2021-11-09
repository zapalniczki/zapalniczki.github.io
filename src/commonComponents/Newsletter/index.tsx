import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Banner, Box, Button, Flexbox, Heading, Text } from 'components'
import { Form as FormikForm, Formik } from 'formik'
import { useBreakpoints, useTranslation } from 'hooks'
import React from 'react'
import { useTheme } from 'styled-components'
import Form from './Form'
import useForm from './useForm'

const Newsletter = () => {
  const { t: commonT } = useTranslation('COMMON')
  const { initialValues, onSubmit, schema, setView, view } = useForm()
  const { colors } = useTheme()

  const isDesktop = useBreakpoints('desktop')

  let title = commonT('NEWSLETTER.FORM.title')
  let subtitle = commonT('NEWSLETTER.FORM.subtitle')

  let content: JSX.Element | null = (
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
    content = null
    title = commonT('NEWSLETTER.SUCCESS.title')
    subtitle = commonT('NEWSLETTER.SUCCESS.subtitle')
  }

  if (view.view === 'ERROR') {
    content = (
      <Box>
        <Button
          label={commonT('NEWSLETTER.ERROR.tryAgain')}
          onClick={() => setView({ view: 'FORM' })}
          size="small"
          variant="primary"
        />
      </Box>
    )
    title = commonT('NEWSLETTER.ERROR.title')
    subtitle = commonT(view.message)
  }

  const iconSize = isDesktop ? '2x' : '5x'

  return (
    <Banner marginTop="xxl-size" size="MEDIUM">
      <Flexbox
        alignItems="center"
        flexDirection={['unset', 'column', 'column', 'row']}
      >
        {view.view === 'SUCCESS' && (
          <FontAwesomeIcon
            color={colors.green}
            icon="check-circle"
            size={iconSize}
          />
        )}

        {view.view === 'ERROR' && (
          <FontAwesomeIcon
            color={colors.red}
            icon="times-circle"
            size={iconSize}
          />
        )}

        <Heading
          level={4}
          marginLeft={['unset', 0, 0, view.view === 'FORM' ? 0 : 'm-size']}
          marginTop={['unset', 'm-size', 'm-size', 0]}
        >
          {title}
        </Heading>
      </Flexbox>

      <Text marginBottom="m-size" marginTop="s-size" type="body-2">
        {subtitle}
      </Text>

      {content && content}
    </Banner>
  )
}

export default Newsletter
