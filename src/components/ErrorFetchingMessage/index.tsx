import { Flexbox, Button, Text } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'

type Props = {
  refetch: () => void
}

const ErrorFetchingMessage = ({ refetch }: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <Flexbox
      alignItems="center"
      flexDirection="column"
      height="100%"
      justifyContent="center"
      left="0"
      position="absolute"
      top="0"
      width="100%"
    >
      <Text type="body-2">{commonT('fetchErrorMessage')}</Text>

      <Button
        label={commonT('fetchErrorRetry')}
        marginTop="m-size"
        onClick={refetch}
        size="medium"
        variant="primary"
      />
    </Flexbox>
  )
}

export default ErrorFetchingMessage
