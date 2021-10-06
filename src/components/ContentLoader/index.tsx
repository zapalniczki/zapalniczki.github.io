import { Box } from 'components'
import React, { ReactNode } from 'react'
import ReactContentLoader, { IContentLoaderProps } from 'react-content-loader'

type Props = {
  children: ReactNode
} & IContentLoaderProps

const ContentLoader = ({ children, ...props }: Props) => (
  <Box height={`${props.height}px`} width={`${props.width}px`}>
    <ReactContentLoader speed={2} {...props}>
      {children}
      <rect height="200" rx="0" ry="0" width="200" x="0" y="0" />
    </ReactContentLoader>
  </Box>
)

export default ContentLoader
