import { Box } from '@zapalniczki/shared-components'
import { useTranslation } from 'hooks'
import React, { ReactNode } from 'react'
import ReactContentLoader, { IContentLoaderProps } from 'react-content-loader'
import { useTheme } from 'styled-components'
import {
  MarginBottomProps,
  MarginLeftProps,
  MarginRightProps,
  MarginTopProps
} from 'styled-system'

type Props = {
  children?: ReactNode
} & IContentLoaderProps &
  MarginTopProps &
  MarginBottomProps &
  MarginLeftProps &
  MarginRightProps

const ContentLoader = ({
  children,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  viewBox,
  ...props
}: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const { colors } = useTheme()

  let customViewBox = viewBox
  if (props.height && props.width) {
    customViewBox = `0 0 ${props.width} ${props.height}`
  }

  return (
    <Box
      height={`${props.height}px`}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      width={`${props.width}px`}
    >
      <ReactContentLoader
        backgroundColor={colors['gray-medium']}
        foregroundColor={colors['gray-light']}
        speed={2.5}
        title={commonT('loading')}
        viewBox={customViewBox}
        {...props}
      >
        {children ? (
          children
        ) : (
          <rect height={props.height} width={props.width} />
        )}
      </ReactContentLoader>
    </Box>
  )
}

export default ContentLoader
