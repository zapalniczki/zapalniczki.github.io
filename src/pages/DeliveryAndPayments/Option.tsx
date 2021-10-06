import { IconName } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flexbox, Text } from 'components'
import React from 'react'

type Props = {
  description: string,
  icon: IconName,
  title?: string
}
const Option = ({ description, icon, title }: Props) => (
    <Flexbox
      alignItems="center"
      border="1px solid"
      borderColor="border-color"
      padding="m-size"
    >
      <Flexbox alignItems="center" justifyContent="center" marginRight="l-size">
        <FontAwesomeIcon icon={icon} size="3x" />
      </Flexbox>

      <Flexbox flexDirection="column">
        {title && (
          <Text marginBottom="xs-size" type="subtitle-2">
            {title}
          </Text>
        )}

        <Text lineHeight="1.21" type="body-2">
          {description}
        </Text>
      </Flexbox>
    </Flexbox>
  )

export default Option
