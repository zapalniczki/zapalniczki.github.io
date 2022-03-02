import { IconName } from '@fortawesome/fontawesome-common-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flexbox, Heading } from 'components'
import React from 'react'
import { useTheme } from 'styled-components'

type Props = {
  icon?: IconName
  status?: 'POSITIVE' | 'NEGATIVE'
  title?: string
}

const TileHeading = ({ icon, status, title }: Props) => {
  const { colors } = useTheme()

  if (!icon && !title) {
    return null
  }

  let color
  if (status === 'POSITIVE') {
    color = colors.green
  } else if (status === 'NEGATIVE') {
    color = colors.red
  }

  return (
    <Flexbox
      alignItems="center"
      paddingX={['unset', 'm-size', 'l-size']}
      paddingY="m-size"
    >
      {icon && <FontAwesomeIcon color={color} icon={icon} size="2x" />}

      <Heading level={6} marginLeft={icon && 'm-size'}>
        {title}
      </Heading>
    </Flexbox>
  )
}

export default TileHeading
