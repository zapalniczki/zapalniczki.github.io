import { HOME } from 'constants/routes'
import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

type Props = RouteProps

const AdminRoute = (props: Props) => {
  const adminValue = window.localStorage.getItem('admin')
  const isAdmin = adminValue === 'true'

  if (!isAdmin) {
    return <Redirect to={HOME} />
  }

  return <Route {...props} />
}

export default AdminRoute
