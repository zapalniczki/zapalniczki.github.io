import { Banner, Box, Button, Flexbox, Heading, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import Form from './Form'
import useForm from './useForm'
import { Formik, Form as FormikForm } from 'formik'
import { SpaceProps } from 'styled-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'

type Props = SpaceProps

const CallMeBack = (props: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const { initialValues, onSubmit, schema, view } = useForm()
  const { colors } = useTheme()

  let title = commonT('CALL_ME_BACK.FORM.title')
  let subtitle = commonT('CALL_ME_BACK.FORM.subtitle')

  let content: JSX.Element | null = (
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
    content = null
    title = commonT('CALL_ME_BACK.SUCCESS.title')
    subtitle = commonT('CALL_ME_BACK.SUCCESS.subtitle')
  }

  if (view.view === 'ERROR') {
    content = (
      <Box>
        <Button
          label={commonT('CALL_ME_BACK.ERROR.buttonLabel')}
          size="small"
        />
      </Box>
    )
    title = commonT('CALL_ME_BACK.ERROR.title')
    subtitle = commonT('CALL_ME_BACK.ERROR.subtitle')
  }

  return (
    <Banner horizonal medium {...props}>
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

          <Heading level={4} marginLeft={view.view === 'FORM' ? 0 : 'm-size'}>
            {title}
          </Heading>
        </Flexbox>

        <Text marginBottom="m-size" marginTop="s-size" type="body-2">
          {subtitle}
        </Text>

        {content && content}
      </Flexbox>
    </Banner>
  )
}

export default CallMeBack
