import { SIGN_IN } from 'constants/routes'
import { authContext } from 'providers'
import React, { useContext } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

type Props = RouteProps

const UserRoute = (props: Props) => {
  const { isLoggedIn } = useContext(authContext)

  if (!isLoggedIn) {
    return <Redirect to={SIGN_IN} />
  }

  return <Route {...props} />
}

export default UserRoute
