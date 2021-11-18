import { Box, ContentLoader } from 'components'
import { useLoaderWidth } from 'hooks'
import React from 'react'

const Loader = () => {
  const width = useLoaderWidth('MAIN')

  return (
    <>
      <ContentLoader height={44} viewBox={`0 0 ${width} 44`} width={width}>
        <rect height="24" transform="translate(0,10)" width="55" />
      </ContentLoader>

      <Box marginTop="1.2rem">
        <ContentLoader
          height={800}
          viewBox={`0 0 ${width} ${800}`}
          width={width}
        >
          <rect height={800} width={width} />
        </ContentLoader>
      </Box>
    </>
  )
}

export default Loader
