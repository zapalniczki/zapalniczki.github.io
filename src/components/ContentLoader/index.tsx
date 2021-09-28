import { Box } from 'components'
import React, { ReactNode } from 'react'
import ReactContentLoader, { IContentLoaderProps } from 'react-content-loader'

type Props = {
  children: ReactNode
} & IContentLoaderProps

const ContentLoader = ({ children, ...props }: Props) => (
  <Box width={`${props.width}px`} height={`${props.height}px`}>
    <ReactContentLoader speed={2} {...props}>
      {children}
      <rect x="0" y="0" rx="0" ry="0" width="200" height="200" />
    </ReactContentLoader>
  </Box>
)

export default ContentLoader
