import { Box, ContentLoader, Tile } from 'components'
import React from 'react'

const Loader = () => (
  <>
    <ContentLoader height={44} viewBox="0 0 1200 44" width={1200}>
      <rect height="24" transform="translate(0,10)" width="55" />
    </ContentLoader>

    <Tile marginTop="1.2rem">
      <Box height="50rem" />
    </Tile>
  </>
)

export default Loader
