import { Box } from 'components'
import { useTranslation } from 'hooks'
import React, { ReactNode } from 'react'
import ReactContentLoader, { IContentLoaderProps } from 'react-content-loader'
import { useTheme } from 'styled-components'

type Props = {
  children: ReactNode
} & IContentLoaderProps

const ContentLoader = ({ children, ...props }: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const { colors } = useTheme()

  return (
    <Box height={`${props.height}px`} width={`${props.width}px`}>
      <ReactContentLoader
        backgroundColor={colors['skeleton-dark']}
        foregroundColor={colors['skeleton-light']}
        speed={2.5}
        title={commonT('loading')}
        {...props}
      >
        {children}
      </ReactContentLoader>
    </Box>
  )
}

export default ContentLoader
