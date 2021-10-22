import { Button, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { ViewWrapper } from '.'
import { View } from './useForm'
import TileHeading from '../TileHeading'

type Props = {
  message: string
  setView: React.Dispatch<React.SetStateAction<View>>
}

const Error = ({ message, setView }: Props) => {
  const { t } = useTranslation('CONTACT')

  return (
    <ViewWrapper flexDirection="column">
      <TileHeading
        icon="times-circle"
        status="NEGATIVE"
        title={t('items.CHECK_STATUS.error.title')}
      />

      <Text type="body-2">{message}</Text>

      <Button
        marginTop="m-size"
        onClick={() => setView({ view: 'FORM' })}
        size="small"
      >
        {t('items.CHECK_STATUS.error.tryNew')}
      </Button>
    </ViewWrapper>
  )
}

export default Error
