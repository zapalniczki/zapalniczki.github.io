import { HOME } from 'constants/routes'
import { useAdmin } from 'hooks'
import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

type Props = RouteProps

const AdminRoute = (props: Props) => {
  const { isAdmin } = useAdmin()

  if (!isAdmin) {
    return <Redirect to={HOME} />
  }

  return <Route {...props} />
}

export default AdminRoute
