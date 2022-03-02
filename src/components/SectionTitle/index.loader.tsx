import React from 'react'
import ContentLoader from '../ContentLoader'
import Flexbox from '../Flexbox'

type Props = {
  left?: boolean
  right?: boolean
}

const SectionTitleLoader = ({ left, right }: Props) => {
  if (!left && !right) {
    return null
  }

  return (
    <Flexbox
      alignItems="center"
      flexDirection={!left ? 'row-reverse' : 'row'}
      justifyContent="space-between"
    >
      {left && <ContentLoader height={30} marginBottom="l-size" width={117} />}

      {right && <ContentLoader height={30} marginBottom="l-size" width={117} />}
    </Flexbox>
  )
}

export default SectionTitleLoader
