import { To } from 'history'
import { useTranslation } from 'hooks'
import React, { ReactNode } from 'react'
import { NavigateOptions } from 'react-router-dom'
import { SpaceProps } from 'styled-system'
import Flexbox from '../Flexbox'
import Heading from '../Heading'
import Link from '../Link'
import Text from '../Text'
import SectionTitleLoader from './index.loader'

type Props = {
  children?: ReactNode
  count?: number
  link?: {
    label: string
    options?: NavigateOptions
    to: To
  }
  title?: string
} & SpaceProps

const SectionTitle = ({ children, count, link, title, ...props }: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  if (!title && !link && count === undefined && !children) {
    return null
  }

  return (
    <Flexbox
      alignItems="center"
      flexDirection={
        (count !== undefined || link) && !title && !children
          ? 'row-reverse'
          : 'row'
      }
      justifyContent="space-between"
      marginBottom="l-size"
      {...props}
    >
      {children}

      {title && <Heading level={4}>{title}</Heading>}

      {count !== undefined && (
        <Text fontWeight="bold" type="subtitle-1">
          {count === 1
            ? commonT('productsSingle', { count })
            : count && count < 5
            ? commonT('productsFew', { count })
            : commonT('productsMultiple', { count })}
        </Text>
      )}

      {link && (
        <Link
          label={link.label}
          showUnderline
          state={link.options?.state}
          to={link.to}
        />
      )}
    </Flexbox>
  )
}

export { SectionTitleLoader }
export default SectionTitle
