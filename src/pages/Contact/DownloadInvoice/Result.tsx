import { Button, ExternalLink, Box } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { ViewWrapper } from '.'
import { View } from './useForm'
import TileHeading from '../TileHeading'

type Props = {
  setView: React.Dispatch<React.SetStateAction<View>>
  url: string
}

const Result = ({ setView, url }: Props) => {
  const { t } = useTranslation('CONTACT')

  return (
    <ViewWrapper flexDirection="column">
      <TileHeading
        icon="check-circle"
        status="POSITIVE"
        title={t('items.DOWNLOAD_INVOICE.result.info')}
      />

      <Box>
        <ExternalLink to={url}>
          {t('items.DOWNLOAD_INVOICE.result.followLink')}
        </ExternalLink>
      </Box>

      <Button
        marginTop="m-size"
        onClick={() => setView({ view: 'FORM' })}
        size="small"
      >
        {t('items.DOWNLOAD_INVOICE.result.new')}
      </Button>
    </ViewWrapper>
  )
}

export default Result
