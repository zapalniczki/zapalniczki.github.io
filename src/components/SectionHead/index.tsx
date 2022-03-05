import { Heading, Link, Separator } from 'components'
import { To } from 'history'
import { Flexbox } from '@zapalniczki/shared-components'

import React from 'react'
import { NavigateOptions } from 'react-router-dom'
import { SpaceProps } from 'styled-system'

type Props = {
  link?: {
    label: string
    options?: NavigateOptions
    to: To
  }
  separator?: boolean
  title: string
} & SpaceProps

const SectionHead = ({ link, separator, title, ...props }: Props) => (
  <>
    <Flexbox
      alignItems="center"
      justifyContent="space-between"
      marginBottom={separator ? 0 : 'm-size'}
      width="100%"
      {...props}
    >
      <Heading level={5}>{title}</Heading>

      {link && (
        <Link
          label={link.label}
          showUnderline
          state={link.options?.state}
          to={link.to}
        />
      )}
    </Flexbox>

    {separator && <Separator marginBottom="m-size" />}
  </>
)

export default SectionHead
