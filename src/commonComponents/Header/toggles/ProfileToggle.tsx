import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ROUTES } from 'braty-common'
import { Button } from 'components'
import { useAdmin, useTranslation } from 'hooks'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ProfileToggle = () => {
  const { t: commonT } = useTranslation('COMMON')

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isAdmin = useAdmin()

  if (!isAdmin) {
    return null
  }

  return (
    <Button
      disabled={basketDisabledpathnames.includes(pathname)}
      onClick={() => navigate(ROUTES.CUSTOMER)}
      padding="s-size"
      title={commonT('profileToggleLabel')}
      type="button"
      variant="quaternary"
    >
      <FontAwesomeIcon icon="user-alt" size="2x" />
    </Button>
  )
}

const basketDisabledpathnames = [
  ROUTES.CART as string,
  ROUTES.CHECKOUT_DETAILS as string,
  ROUTES.CHECKOUT_DELIVERY as string,
  ROUTES.CHECKOUT_PAYMENT as string,
  ROUTES.CHECKOUT_RESULT as string
]

export default ProfileToggle
