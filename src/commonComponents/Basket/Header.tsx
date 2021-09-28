import React, { useContext } from 'react'
import { Flexbox, Button, Text } from 'components'
import { useTranslation } from 'hooks'

import { basketContext } from 'providers/BasketProvider'
import { basketToggleContext } from 'providers/BasketToggleProvider'
import { checkoutContext } from 'providers/CheckoutProvider'

const Header = () => {
  const { t } = useTranslation('COMMON')
  const { closeBasket } = useContext(basketToggleContext)
  const { clearBasket, basketLength } = useContext(basketContext)
  const { setCheckout } = useContext(checkoutContext)

  let countName = 'basket.products'

  if (basketLength > 4) {
    countName = 'basket.products_multiple'
  } else if (basketLength > 1) {
    countName = 'basket.products_plural'
  }

  return (
    <Flexbox
      padding="m-size"
      width="100%"
      backgroundColor="white"
      // @ts-ignore
      zIndex="basket"
      alignItems="center"
    >
      <Text type="subtitle-1" marginRight="auto">
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
          size="medium"
          variant="secondary"
          onClick={() => {
            clearBasket()
            setCheckout((prev) => ({
              ...prev,
              totalNew: 0
            }))
          }}
          type="button"
        >
          {t('basket.clear')}
        </Button>
      )}

      <Button
        size="medium"
        variant="secondary"
        onClick={closeBasket}
        type="button"
      >
        {t('basket.close')}
      </Button>
    </Flexbox>
  )
}

export default Header
