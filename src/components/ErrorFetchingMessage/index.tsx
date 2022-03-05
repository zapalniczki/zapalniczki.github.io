import { Button, Text } from 'components'
import { useTranslation } from 'hooks'
import { Flexbox } from '@zapalniczki/shared-components'

import React, { ReactElement } from 'react'

type Props = {
  Loader?: ReactElement
  refetch: () => void
}

const ErrorFetchingMessage = ({ Loader, refetch }: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <Flexbox minHeight="8.6rem" position="relative" width="100%">
      {Loader && Loader}

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
    </Flexbox>
  )
}

export default ErrorFetchingMessage
