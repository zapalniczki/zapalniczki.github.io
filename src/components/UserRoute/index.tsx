import { HOME } from 'constants/routes'
import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

type Props = RouteProps

const UserRoute = (props: Props) => {
  const isCustomer = true

  if (!isCustomer) {
    return <Redirect to={HOME} />
  }

  return <Route {...props} />
}

export default UserRoute
