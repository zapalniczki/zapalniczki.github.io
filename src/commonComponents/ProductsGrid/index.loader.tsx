import { Box, ContentLoader, Flexbox, Grid } from 'components'
import React from 'react'
import { SpaceProps } from 'styled-system'
import TileLoader from './TIle.loader'

type Props = SpaceProps & {
  count?: number
  title?: boolean
}

const Loader = ({ title, count = 3, ...props }: Props) => (
  <Flexbox flexDirection="column">
    {title && (
      <Box marginBottom="m-size" marginTop="xxl-size">
        <ContentLoader
          gradientRatio={1}
          height={30}
          viewBox="0 0 117 30"
          width={117}
        >
          <rect height="30" width="117" />
        </ContentLoader>
      </Box>
    )}

    <Grid {...props}>
      {[...Array(count).keys()].map((n) => (
        <TileLoader key={n} />
      ))}
    </Grid>
  </Flexbox>
)

export default Loader
