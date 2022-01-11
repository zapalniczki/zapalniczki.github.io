import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { signOut } from 'api'
import { ROUTES } from 'braty-common'
import { Button } from 'components'
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
  ROUTES.CART as string,
  ROUTES.CHECKOUT_DETAILS as string,
  ROUTES.CHECKOUT_DELIVERY as string,
  ROUTES.CHECKOUT_PAYMENT as string,
  ROUTES.CHECKOUT_RESULT as string
]

export default SignoutToggle
