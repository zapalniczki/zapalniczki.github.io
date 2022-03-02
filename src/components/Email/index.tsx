import React from 'react'
import { useTranslation } from 'hooks'
import { getEmail } from 'utils'

type Props = {
  email: string
}

const Email = ({ email }: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  const subject = commonT('emailSubject')
  const fullString = getEmail(email, subject)

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{fullString}</>
}

export default Email
