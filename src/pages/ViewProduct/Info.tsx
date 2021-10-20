import { GetProductResponse } from 'models'
import { Flexbox, Heading, Separator, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { displayMoney } from 'utils'
import NoTypeForm from './NoType'

type Props = {
  product: GetProductResponse
}

const Info = ({ product }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')

  return (
    <Flexbox flexDirection="column" flexGrow={1} marginLeft="xl-size">
      <Heading level={4}>{product.name}</Heading>

      <Separator />

      <Flexbox>
        <Text type="caption">{t('color')}</Text>
        <Text marginLeft="s-size" type="subtitle-2">
          {t('colorValueTODO')}
        </Text>
      </Flexbox>

      <Flexbox>
        <Text type="caption">{t('label')}</Text>
        <Text marginLeft="s-size" type="subtitle-2">
          {product.label.label}
        </Text>
      </Flexbox>

      <Flexbox>
        <Text type="caption">{t('icon')}</Text>
        <Text marginLeft="s-size" type="subtitle-2">
          {product.icon.label}
        </Text>
      </Flexbox>

      <Separator />

      <Text type="body-2">{product.description}</Text>

      <Separator />

      <Heading level={5}>{displayMoney(product.price)}</Heading>
      <Text type="caption">{t('priceSubtitle')}</Text>

      <Separator />

      <NoTypeForm product={product} />
    </Flexbox>
  )
}

export default Info
