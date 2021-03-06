import { DisplayMoney, Heading, Separator, Text, Tile } from 'components'
import { Flexbox } from '@zapalniczki/shared-components'

import { useTranslation } from 'hooks'
import { GetProductResponse } from 'models'
import React from 'react'
import { getLanguageLabel, getLanguagePrice } from 'utils'
import AvilabilityIndicator from './AvilabilityIndicator'
import Form from './Form'

type Props = {
  product: GetProductResponse
}

const Info = ({ product }: Props) => {
  const { language } = useTranslation('COMMON')
  const { t } = useTranslation('VIEW_PRODUCT')

  const iconLabel = getLanguageLabel({
    language,
    label: product.icon
  })

  const collectionLabel = getLanguageLabel({
    language,
    label: product.collection
  })

  const productName = getLanguageLabel({
    language,
    label: product,
    name: true
  })

  const description = getLanguageLabel({
    language,
    label: product,
    description: true
  })

  const price = getLanguagePrice({
    language,
    price: product
  })

  return (
    <Tile
      backgroundColor="gray-light"
      border="none"
      borderRadius={0}
      flexGrow={1}
    >
      <Heading level={4}>{productName}</Heading>

      <Separator />

      <Heading level={5}>
        <DisplayMoney>{price}</DisplayMoney>
      </Heading>

      <Text type="caption">{t('priceSubtitle')}</Text>

      <AvilabilityIndicator
        status={product.mold.status}
        visible={product.visible}
      />

      {product.visible && (
        <>
          <Separator />

          <Form product={product} />
        </>
      )}

      <Separator />

      <Detail label={t('sku')} value={product.id} />

      <Detail label={t('collection')} value={collectionLabel} />

      <Detail label={t('label')} quotes value={product.label.key} />

      <Detail label={t('icon')} value={iconLabel} />

      <Detail label={t('color')} value={t('colorValueTODO')} />

      <Separator />

      <Text type="body-2">{description}</Text>
    </Tile>
  )
}

type DetailProps = {
  label: string
  quotes?: boolean
  value: string
}

const Detail = ({ label, quotes, value }: DetailProps) => {
  const displayedValue = quotes ? `"${value}"` : value

  return (
    <Flexbox>
      <Text type="caption">{label}</Text>

      <Text marginLeft="s-size" type="subtitle-2">
        {displayedValue}
      </Text>
    </Flexbox>
  )
}

export default Info
