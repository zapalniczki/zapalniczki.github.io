import { Box, ContentLoader, Tile } from 'components'
import React from 'react'

const Loader = () => {
  return (
    <>
      <ContentLoader width={1200} height={44} viewBox="0 0 1200 44">
        <rect width="55" height="24" transform="translate(0,10)" />
      </ContentLoader>
      <Tile marginTop="1.2rem">
        <Box height="50rem" />
      </Tile>
    </>
  )
}

export default Loader
