import { GetProductResponse } from 'models'
import { Flexbox, Heading, Separator, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { displayMoney, removeSeparatorsFromLabel } from 'utils'
import Form from './Form'
import AvilabilityIndicator from './AvilabilityIndicator'

type Props = {
  product: GetProductResponse
}

const Info = ({ product }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')

  return (
    <Flexbox flexDirection="column" flexGrow={1} marginLeft="xl-size">
      <Heading level={4}>{product.name}</Heading>

      <Separator />

      <Heading level={5}>{displayMoney(product.price)}</Heading>

      <Text type="caption">{t('priceSubtitle')}</Text>

      <Separator />

      <Form product={product} />

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
          {removeSeparatorsFromLabel(product.label.label)}
        </Text>
      </Flexbox>

      <Flexbox>
        <Text type="caption">{t('icon')}</Text>

        <Text marginLeft="s-size" type="subtitle-2">
          {product.icon.label}
        </Text>
      </Flexbox>

      <Separator />

      <Text marginBottom="m-size" type="body-2">
        {product.description}
      </Text>

      <AvilabilityIndicator status={product.mold.status} />
    </Flexbox>
  )
}

export default Info
