import React, { useContext } from 'react'
import { Flexbox, Button, Text } from 'components'
import { useTranslation } from 'hooks'

import { basketContext } from 'providers/BasketProvider'
import { basketToggleContext } from 'providers/BasketToggleProvider'
import { checkoutContext } from 'providers/CheckoutProvider'

const Header = () => {
  const { t } = useTranslation('COMMON')
  const { closeBasket } = useContext(basketToggleContext)
  const { basketLength, clearBasket } = useContext(basketContext)
  const { setCheckout } = useContext(checkoutContext)

  let countName = 'basket.products'

  if (basketLength > 4) {
    countName = 'basket.products_multiple'
  } else if (basketLength > 1) {
    countName = 'basket.products_plural'
  }

  return (
    <Flexbox
      alignItems="center"
      backgroundColor="white"
      padding="m-size"
      width="100%"
      // TODO Which this is not accepted? zIndex="basket"
      zIndex={60}
    >
      <Text marginRight="auto" type="subtitle-1">
        {t('basket.title')}

        {!!basketLength && (
          <Text marginLeft="s-size" span type="caption">
            {t(countName, { count: basketLength })}
          </Text>
        )}
      </Text>

      {!!basketLength && (
        <Button
          marginRight="s-size"
          onClick={() => {
            clearBasket()
            setCheckout((prev) => ({
              ...prev,
              totalNew: 0
            }))
          }}
          size="medium"
          type="button"
          variant="secondary"
        >
          {t('basket.clear')}
        </Button>
      )}

      <Button
        onClick={closeBasket}
        size="medium"
        type="button"
        variant="secondary"
      >
        {t('basket.close')}
      </Button>
    </Flexbox>
  )
}

export default Header
