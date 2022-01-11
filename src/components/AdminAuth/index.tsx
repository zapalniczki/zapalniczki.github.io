import { ROUTES } from 'braty-common'
import { useAdmin } from 'hooks'
import { Navigate } from 'react-router-dom'
import React from 'react'

type Props = {
  children: JSX.Element
}

const AdminAuth = ({ children }: Props) => {
  const isAdmin = useAdmin()

  if (!isAdmin) {
    return <Navigate to={ROUTES.HOME} />
  }

  return children
}

export default AdminAuth
