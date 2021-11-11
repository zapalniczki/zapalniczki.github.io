import React from 'react'
import { Box, ContentLoader, Flexbox } from 'components'
import { SpaceProps } from 'styled-system'

type Props = SpaceProps

const Condtion = (props: Props) => (
  <Flexbox
    //  border="2px solid blue"
    flexDirection="column"
    {...props}
  >
    <Box height="2.4rem">
      <ContentLoader
        gradientRatio={1}
        height={24}
        viewBox="0 0 65 24"
        width={65}
      >
        <rect height="24" width="65" />
      </ContentLoader>
    </Box>

    <Flexbox>
      <Chip isFirst />

      <Chip />

      <Chip />
    </Flexbox>
  </Flexbox>
)

type ChipProps = { isFirst?: boolean }
const Chip = ({ isFirst = false }: ChipProps) => (
  <Box height="2.8rem" marginLeft={isFirst ? 0 : 'xs-size'} marginTop="0.5rem">
    <ContentLoader gradientRatio={1} height={28} viewBox="0 0 85 28" width={85}>
      <rect height="28" width="65" />
    </ContentLoader>
  </Box>
)

export default Condtion
