import { Button, Flexbox, PanelHeader, Text } from 'components'
import { useTranslation } from 'hooks'
import { checkoutContext, togglesContext } from 'providers'
import React, { useContext } from 'react'

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
    <PanelHeader closeOnClick={closeBasket}>
      <Button
        disabled={!productCount}
        label={commonT('clear')}
        mobileFullWidth={false}
        onClick={clearBasket}
        size="small"
        type="button"
        variant="ternary"
      />

      <Flexbox
        alignItems={['unset', 'flex-start', 'flex-start', 'center']}
        flexDirection={['unset', 'column', 'column', 'row']}
        marginRight="auto"
      >
        <Text textAlign="left" type="subtitle-1" width="100%">
          {commonT('title')}
        </Text>

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
    </PanelHeader>
  )
}

export default Header
