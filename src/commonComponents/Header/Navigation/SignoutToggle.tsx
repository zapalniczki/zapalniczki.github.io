import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signOut } from 'api'
import { Button } from 'components'
import {
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PAYMENT,
  CART,
  CHECKOUT_RESULT
} from 'constants/routes'
import { useTranslation } from 'hooks'
import { authContext } from 'providers'
import React, { useContext } from 'react'
import { useMutation } from 'react-query'
import { useLocation } from 'react-router-dom'

const SignoutToggle = () => {
  const { t: commonT } = useTranslation('COMMON')

  const { pathname } = useLocation()

  const { isLoggedIn } = useContext(authContext)
  const { mutateAsync: mutateSignOut } = useMutation(signOut)

  if (!isLoggedIn) {
    return null
  }

  return (
    <Button
      disabled={basketDisabledpathnames.includes(pathname)}
      onClick={async () => {
        await mutateSignOut()
      }}
      padding="s-size"
      title={commonT('signoutToggleLabel')}
      type="button"
      variant="quaternary"
    >
      <FontAwesomeIcon icon="sign-out-alt" size="2x" />
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

export default SignoutToggle
