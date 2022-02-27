import { ContentLoader } from 'components'
import { useLoaderWidth } from 'hooks'
import React from 'react'

const ContactDetailsLoader = () => {
  const width = useLoaderWidth('SIDE')
  const height = 516

  return <ContentLoader height={height} width={width} />
}

export default ContactDetailsLoader
