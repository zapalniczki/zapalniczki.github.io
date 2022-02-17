import { ContentLoader } from 'components'
import { useLoaderWidth } from 'hooks'
import React from 'react'

const Loader = () => {
  const infoWidth = useLoaderWidth()
  const infoHeight = 800

  const labelHeight = 24
  const labelWidth = 55

  return (
    <>
      <ContentLoader height={labelHeight} width={labelWidth} />

      <ContentLoader height={infoHeight} marginTop="1.2rem" width={infoWidth} />
    </>
  )
}

export default Loader
