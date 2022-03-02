import { Box, Button, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { ViewWrapper } from '.'
import { View } from './useForm'
import TileHeading from '../TileHeading'
import TileContent from '../TileContent'

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
        title={t('items.DOWNLOAD_INVOICE.error.title')}
      />

      <TileContent>
        <Text type="body-2">{message}</Text>

        <Box marginTop="m-size">
          <Button
            label={t('items.DOWNLOAD_INVOICE.error.new')}
            onClick={() => setView({ view: 'FORM' })}
            size="small"
          />
        </Box>
      </TileContent>
    </ViewWrapper>
  )
}

export default Error
