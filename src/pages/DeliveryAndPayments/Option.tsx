import { IconName } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flexbox, Text } from 'components'
import React from 'react'

type Props = {
  icon: IconName
  title?: string
  description: string
}
const Option = ({ icon, title, description }: Props) => {
  return (
    <Flexbox
      padding="m-size"
      alignItems="center"
      border="1px solid"
      borderColor="border-color"
    >
      <Flexbox alignItems="center" justifyContent="center" marginRight="l-size">
        <FontAwesomeIcon icon={icon} size="3x" />
      </Flexbox>

      <Flexbox flexDirection="column">
        {title && (
          <Text type="subtitle-2" marginBottom="xs-size">
            {title}
          </Text>
        )}

        <Text type="body-2" lineHeight="1.21">
          {description}
        </Text>
      </Flexbox>
    </Flexbox>
  )
}

export default Option
