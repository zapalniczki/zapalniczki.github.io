import { Flexbox, Spinner, Text } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'

const Preloader = () => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <Flexbox
      alignItems="center"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      width="100vw"
    >
      <Spinner />

      <Text marginTop="m-size" type="body-2">
        {commonT('preloaderInfo')}
      </Text>
    </Flexbox>
  )
}

export default Preloader
