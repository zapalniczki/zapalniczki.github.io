import { Box } from 'components'
import React from 'react'

const UserAvatar = () => (
  <Box
    backgroundColor="border-color"
    borderRadius="50%"
    maxHeight={SIZE}
    maxWidth={SIZE}
    minHeight={SIZE}
    minWidth={SIZE}
  />
)

const SIZE = '13rem'

export default UserAvatar
