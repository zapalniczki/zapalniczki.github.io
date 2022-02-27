import { SectionHead, Switch, Tile } from 'components'
import { useTranslation } from 'hooks'
import { checkoutContext, initState } from 'providers'
import React, { useContext } from 'react'

const Settings = () => {
  const t = useTranslation('CHECKOUT_RESULT').withBase('SETTINGS')

  const { checkout, setCheckout } = useContext(checkoutContext)
  const hasUserData = !!(
    checkout.contact_details &&
    checkout.delivery_type &&
    checkout.payment_type
  )

  return (
    <Tile>
      <SectionHead separator title={t('title')} />

      <Switch
        checked={hasUserData}
        disabled={!hasUserData}
        flexDirection="row-reverse"
        label={t('safeMyDetails')}
        marginRight="auto"
        onChange={(prev) => {
          if (!prev) {
            setCheckout(initState)
          }
        }}
      />
    </Tile>
  )
}

export default Settings
