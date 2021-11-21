import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'components'
import {
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PAYMENT,
  CART,
  CHECKOUT_RESULT,
  USER
} from 'constants/routes'
import { useAdmin, useTranslation } from 'hooks'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

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
      onClick={() => navigate(USER)}
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
  CART,
  CHECKOUT_DETAILS,
  CHECKOUT_DELIVERY,
  CHECKOUT_PAYMENT,
  CHECKOUT_RESULT
]

export default ProfileToggle
