import { Button, Flexbox, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { ViewWrapper } from '.'
import { View } from './useForm'
import TileHeading from '../TileHeading'
import { useNavigate } from 'react-router'
import { Order } from 'braty-common'
import { getOrderPath } from 'utils'
import TileContent from '../TileContent'

type Props = {
  id: Order['id']
  setView: React.Dispatch<React.SetStateAction<View>>
  status: Order['status']
}

const Result = ({ id, setView, status }: Props) => {
  const { t } = useTranslation('CONTACT')
  const { t: commonT } = useTranslation('COMMON')
  const navigate = useNavigate()

  return (
    <ViewWrapper flexDirection="column">
      <TileHeading
        icon="check-circle"
        status="POSITIVE"
        title={commonT(`ORDER_STATUSES.${status}`)}
      />

      <TileContent>
        <Text type="body-2">{commonT(`STATUS_MEANINGS.${status}`)}</Text>

        <Flexbox flexDirection={['unset', 'column', 'row']} marginTop="m-size">
          <Button
            label={t('items.CHECK_STATUS.result.tryNew')}
            onClick={() => setView({ view: 'FORM' })}
            size="small"
            variant="secondary"
          />

          <Button
            label={t('items.CHECK_STATUS.result.seeOrder')}
            marginLeft={['unset', 0, 'm-size']}
            marginTop={['unset', 'm-size', 0]}
            onClick={() => {
              const path = getOrderPath(id)
              navigate(path)
            }}
            size="small"
          />
        </Flexbox>
      </TileContent>
    </ViewWrapper>
  )
}

export default Result
