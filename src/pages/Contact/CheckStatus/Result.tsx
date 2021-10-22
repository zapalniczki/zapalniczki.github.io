import { Button, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { ViewWrapper } from '.'
import { View } from './useForm'
import TileHeading from '../TileHeading'

type Props = {
  setView: React.Dispatch<React.SetStateAction<View>>
  status: string
}

const Result = ({ setView, status }: Props) => {
  const { t } = useTranslation('CONTACT')
  const { t: commonT } = useTranslation('COMMON')

  return (
    <ViewWrapper flexDirection="column">
      <TileHeading
        icon="check-circle"
        status="POSITIVE"
        title={commonT(`ORDER_STATUSES.${status}`)}
      />

      <Text type="body-2">
        {t(`items.CHECK_STATUS.result.statusesMeanings.${status}`)}
      </Text>

      <Button
        label={t('items.CHECK_STATUS.result.tryNew')}
        marginTop="m-size"
        onClick={() => setView({ view: 'FORM' })}
        size="small"
      />
    </ViewWrapper>
  )
}

export default Result
