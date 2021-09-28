import { Button, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { ViewWrapper } from '.'
import { View } from './useForm'

type Props = {
  status: string
  setView: React.Dispatch<React.SetStateAction<View>>
}

const Result = ({ status, setView }: Props) => {
  const { t } = useTranslation('CONTACT')
  const { t: commonT } = useTranslation('COMMON')

  return (
    <ViewWrapper flexDirection="column">
      <Text type="body-2">
        {t('items.CHECK_STATUS.result.info')}{' '}
        <strong>{commonT(`orderStatuses.${status}`)}</strong>
      </Text>

      <Text type="caption">
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
