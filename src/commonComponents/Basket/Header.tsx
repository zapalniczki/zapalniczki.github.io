import React, { useContext } from 'react'
import { Flexbox, Button, Text, Separator } from 'components'
import { useTranslation } from 'hooks'

import { basketToggleContext } from 'providers'
import { checkoutContext } from 'providers'

const Header = () => {
  const { t } = useTranslation('COMMON')
  const { closeBasket } = useContext(basketToggleContext)
  const { checkout, setCheckout } = useContext(checkoutContext)

  const productCount = checkout.basket.length

  let countName = 'basket.products'
  if (productCount > 4) {
    countName = 'basket.products_multiple'
  } else if (productCount > 1) {
    countName = 'basket.products_plural'
  }

  return (
    <Flexbox
      backgroundColor="white"
      flexDirection="column"
      width="100%"
      // TODO Which this is not accepted? zIndex="basket"
      zIndex={60}
    >
      <Flexbox alignItems="center" padding="m-size">
        <Text marginRight="auto" type="subtitle-1">
          {t('basket.title')}

          {!!productCount && (
            <Text marginLeft="s-size" span type="caption">
              {t(countName, { count: productCount })}
            </Text>
          )}
        </Text>

        {!!productCount && (
          <Button
            label={t('basket.clear')}
            marginRight="s-size"
            onClick={() => {
              setCheckout((prev) => ({
                ...prev,
                total: {
                  ...prev.total,
                  products: []
                }
              }))
            }}
            size="small"
            type="button"
            variant="ternary"
          />
        )}

        <Button
          icon="times"
          onClick={closeBasket}
          size="small"
          type="button"
          variant="secondary"
        />
      </Flexbox>

      <Separator marginX="s-size" marginY="0" width="auto" />
    </Flexbox>
  )
}

export default Header
