import { Link, Flexbox, Heading } from 'components'
import { LocationDescriptor } from 'history'
import React from 'react'
import { SpaceProps } from 'styled-system'

type Props = {
  link?: {
    label: string
    to: LocationDescriptor
  }
  title?: string
} & SpaceProps

const SectionHead = ({ link, title, ...props }: Props) => {
  if (!title && !link) {
    return null
  }

  return (
    <Flexbox
      alignItems="center"
      justifyContent="space-between"
      marginBottom="m-size"
      {...props}
    >
      {title && <Heading level={5}>{title}</Heading>}

      {link && (
        <Link showUnderline to={link.to}>
          {link.label}
        </Link>
      )}
    </Flexbox>
  )
}

export default SectionHead
