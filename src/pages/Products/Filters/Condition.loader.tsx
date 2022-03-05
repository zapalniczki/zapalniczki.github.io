import React from 'react'
import { ContentLoader, ChipLoader as Chip } from 'components'
import { SpaceProps } from 'styled-system'
import { useBreakpoints } from 'hooks'
import { Flexbox } from '@zapalniczki/shared-components'

type Props = SpaceProps

const Condtion = (props: Props) => {
  const mobile = useBreakpoints('mobile')
  const n = mobile ? 3 : 7

  return (
    <Flexbox flexDirection="column" {...props}>
      <ContentLoader gradientRatio={1} height={24} width={65} />

      <Flexbox>
        {[...new Array(n)].map((_elem, index) => (
          <Chip isFirst={!index} key={index} />
        ))}
      </Flexbox>
    </Flexbox>
  )
}

export default Condtion
