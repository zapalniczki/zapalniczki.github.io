import { Link, Flexbox, Heading, Separator, Text } from 'components'
import { To } from 'history'
import { useTranslation } from 'hooks'
import React, { ReactNode } from 'react'
import { NavigateOptions } from 'react-router-dom'
import { SpaceProps } from 'styled-system'

type Props = {
  children?: ReactNode
  count?: number
  link?: {
    label: string
    options?: NavigateOptions
    to: To
  }
  separator?: boolean
  title?: string
} & SpaceProps

const SectionHead = ({
  children,
  count,
  link,
  separator,
  title,
  ...props
}: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  if (!title && !link && count === undefined && !children) {
    return null
  }

  return (
    <Flexbox flexDirection="column" marginBottom="m-size" {...props}>
      <Flexbox
        alignItems="center"
        flexDirection={
          count !== undefined && !link && !title && !children
            ? 'row-reverse'
            : 'row'
        }
        justifyContent="space-between"
      >
        {children}

        {title && <Heading level={5}>{title}</Heading>}

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

      {separator && <Separator marginBottom="0" />}
    </Flexbox>
  )
}

export default SectionHead
