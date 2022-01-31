import { GetProductResponse } from 'models'
import { Flexbox, Heading, Separator, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { displayMoney, getLanguageLabel } from 'utils'
import Form from './Form'
import AvilabilityIndicator from './AvilabilityIndicator'

type Props = {
  product: GetProductResponse
}

const Info = ({ product }: Props) => {
  const { currentLanguage } = useTranslation('COMMON')
  const { t } = useTranslation('VIEW_PRODUCT')

  const iconLabel = getLanguageLabel({
    language: currentLanguage,
    label: product.icon
  })
  const labelLabel = getLanguageLabel({
    language: currentLanguage,
    label: product.label
  })

  const collectionLabel = getLanguageLabel({
    language: currentLanguage,
    label: product.collection
  })

  const productName = getLanguageLabel({
    language: currentLanguage,
    label: product,
    name: true
  })

  const description = getLanguageLabel({
    language: currentLanguage,
    label: product,
    description: true
  })

  return (
    <Flexbox
      flexDirection="column"
      flexGrow={1}
      marginLeft={['unset', 'unset', 'unset', 'xl-size']}
      marginTop={['unset', 'xxl-size', 'xxl-size', 'unset']}
    >
      <Heading level={4}>{productName}</Heading>

      <Separator />

      <Heading level={5}>{displayMoney(product.price)}</Heading>

      <Text type="caption">{t('priceSubtitle')}</Text>

      <AvilabilityIndicator status={product.mold.status} />

      <Separator />

      <Form product={product} />

      <Separator />

      <Detail label={t('sku')} value={product.id} />

      <Detail label={t('collection')} value={collectionLabel} />

      <Detail label={t('label')} quotes value={labelLabel} />

      <Detail label={t('icon')} value={iconLabel} />

      <Detail label={t('color')} value={t('colorValueTODO')} />

      <Separator />

      <Text type="body-2">{description}</Text>
    </Flexbox>
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
