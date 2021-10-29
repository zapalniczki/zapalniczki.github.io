import { Button, Flexbox, Text } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'
import { ViewWrapper } from '.'
import TileHeading from '../TileHeading'
import { View } from './useForm'

type Props = {
  setView: React.Dispatch<React.SetStateAction<View>>
  url: string
}

const Result = ({ setView, url }: Props) => {
  const t = useTranslation('CONTACT').withBase('items.DOWNLOAD_INVOICE.result')

  return (
    <ViewWrapper flexDirection="column">
      <TileHeading icon="check-circle" status="POSITIVE" title={t('title')} />

      <Text type="body-2">{t('info')}</Text>

      <Flexbox marginTop="m-size">
        <Button
          label={t('new')}
          onClick={() => setView({ view: 'FORM' })}
          size="small"
          variant="secondary"
        />

        <Button
          label={t('followLink')}
          marginLeft="m-size"
          onClick={() => window.open(url, '_blank')}
          size="small"
        />
      </Flexbox>
    </ViewWrapper>
  )
}

export default Result
