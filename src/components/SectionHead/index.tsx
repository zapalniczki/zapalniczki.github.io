import { Link, Flexbox, Heading, Separator } from 'components'
import { LocationDescriptor } from 'history'
import React from 'react'
import { SpaceProps } from 'styled-system'

type Props = {
  link?: {
    label: string
    to: LocationDescriptor
  }
  separator?: boolean
  title?: string
} & SpaceProps

const SectionHead = ({ link, separator, title, ...props }: Props) => {
  if (!title && !link) {
    return null
  }

  return (
    <Flexbox flexDirection="column" marginBottom="m-size" {...props}>
      <Flexbox
        alignItems="center"
        justifyContent="space-between"
        // marginBottom="m-size"
      >
        {title && <Heading level={5}>{title}</Heading>}

        {link && (
          <Link showUnderline to={link.to}>
            {link.label}
          </Link>
        )}
      </Flexbox>

      {separator && <Separator marginBottom="0" />}
    </Flexbox>
  )
}

export default SectionHead
