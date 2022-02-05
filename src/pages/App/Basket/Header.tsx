import React, { useContext } from 'react'
import { Flexbox, Button, Text, Separator } from 'components'
import { useTranslation } from 'hooks'

import { togglesContext } from 'providers'
import { checkoutContext } from 'providers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const commonT = useTranslation('COMMON').withBase('BASKET')
  const { closeBasket } = useContext(togglesContext)
  const { clearBasket, productCount } = useContext(checkoutContext)

  let countName = 'products'
  if (productCount > 4) {
    countName = 'products_multiple'
  } else if (productCount > 1) {
    countName = 'products_plural'
  }

  return (
    <Flexbox
      backgroundColor="white"
      flexDirection="column"
      // TODO Which this is not accepted? zIndex="basket"
      width="100%"
      zIndex={60}
    >
      <Flexbox alignItems="center" padding="s-size">
        <Flexbox
          alignItems={['unset', 'flex-start', 'flex-start', 'center']}
          flexDirection={['unset', 'column', 'column', 'row']}
          marginRight="auto"
        >
          <Text type="subtitle-1">{commonT('title')}</Text>

          {!!productCount && (
            <Text
              marginLeft={['unset', 'unset', 'unset', 's-size']}
              span
              type="caption"
            >
              {commonT(countName, { count: productCount })}
            </Text>
          )}
        </Flexbox>

        {!!productCount && (
          <Button
            label={commonT('clear')}
            marginRight="s-size"
            mobileFullWidth={false}
            onClick={clearBasket}
            size="small"
            type="button"
            variant="ternary"
          />
        )}

        <Button
          mobileFullWidth={false}
          onClick={closeBasket}
          size="small"
          type="button"
          variant="quaternary"
        >
          <FontAwesomeIcon icon="times" size="2x" />
        </Button>
      </Flexbox>

      <Separator marginX="s-size" marginY="0" width="auto" />
    </Flexbox>
  )
}

export default Header
