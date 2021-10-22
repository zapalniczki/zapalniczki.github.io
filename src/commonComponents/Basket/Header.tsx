import React, { useContext } from 'react'
import { Flexbox, Button, Text, Separator } from 'components'
import { useTranslation } from 'hooks'

import { basketContext } from 'providers'
import { basketToggleContext } from 'providers'
import { checkoutContext } from 'providers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      backgroundColor="white"
      // TODO Which this is not accepted? zIndex="basket"
      flexDirection="column"
      width="100%"
      zIndex={60}
    >
      <Flexbox alignItems="center" padding="m-size">
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
                total: 0
              }))
            }}
            size="small"
            type="button"
            variant="ternary"
          >
            {t('basket.clear')}
          </Button>
        )}

        <Button
          onClick={closeBasket}
          size="small"
          type="button"
          variant="secondary"
        >
          <FontAwesomeIcon icon="times" />

          {/* {t('basket.close')} */}
        </Button>
      </Flexbox>

      <Separator marginX="s-size" marginY="0" width="auto" />
    </Flexbox>
  )
}

export default Header
