import { Button, Text, Heading } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { ViewWrapper } from '.'
import { View } from './useForm'

type Props = {
  setView: React.Dispatch<React.SetStateAction<View>>
  status: string
}

const Result = ({ setView, status }: Props) => {
  const { t } = useTranslation('CONTACT')
  const { t: commonT } = useTranslation('COMMON')

  return (
    <ViewWrapper flexDirection="column">
      <Heading level={6}>{commonT(`ORDER_STATUSES.${status}`)}</Heading>

      <Text marginTop="m-size" type="body-2">
        {t(`items.CHECK_STATUS.result.statusesMeanings.${status}`)}
      </Text>

      <Button
        marginTop="m-size"
        onClick={() => setView({ view: 'FORM' })}
        size="small"
      >
        {t('items.CHECK_STATUS.result.tryNew')}
      </Button>
    </ViewWrapper>
  )
}

export default Result
