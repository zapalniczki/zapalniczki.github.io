import { SIGN_IN } from 'constants/routes'
import { authContext } from 'providers'
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
  children: JSX.Element
}

const UserAuth = ({ children }: Props) => {
  const { isLoggedIn } = useContext(authContext)

  if (!isLoggedIn) {
    return <Navigate to={SIGN_IN} />
  }

  return children
}

export default UserAuth
