import { Button, Flexbox, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { ViewWrapper } from '.'
import { View } from './useForm'
import TileHeading from '../TileHeading'
import { useHistory, generatePath } from 'react-router'
import { ORDERS } from 'constants/routes'
import { Order } from 'models'

type Props = {
  id: Order['id']
  setView: React.Dispatch<React.SetStateAction<View>>
  status: Order['status']
}

const Result = ({ id, setView, status }: Props) => {
  const { t } = useTranslation('CONTACT')
  const { t: commonT } = useTranslation('COMMON')
  const history = useHistory()

  return (
    <ViewWrapper flexDirection="column">
      <TileHeading
        icon="check-circle"
        status="POSITIVE"
        title={commonT(`ORDER_STATUSES.${status}`)}
      />

      <Text type="body-2">{commonT(`STATUS_MEANINGS.${status}`)}</Text>

      <Flexbox marginTop="m-size">
        <Button
          label={t('items.CHECK_STATUS.result.tryNew')}
          onClick={() => setView({ view: 'FORM' })}
          size="small"
          variant="secondary"
        />

        <Button
          label={t('items.CHECK_STATUS.result.seeOrder')}
          marginLeft="m-size"
          onClick={() => {
            const orderPath = generatePath(ORDERS, { id })
            history.push(orderPath)
          }}
          size="small"
        />
      </Flexbox>
    </ViewWrapper>
  )
}

export default Result
