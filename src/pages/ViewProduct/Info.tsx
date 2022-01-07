import { GetProductResponse } from 'models'
import { Flexbox, Heading, Separator, Text } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { displayMoney, getLanguageLabel, getProductName } from 'utils'
import Form from './Form'
import AvilabilityIndicator from './AvilabilityIndicator'

type Props = {
  product: GetProductResponse
}

const Info = ({ product }: Props) => {
  const { currentLanguage, t: commonT } = useTranslation('COMMON')
  const { t } = useTranslation('VIEW_PRODUCT')

  const iconLabel = getLanguageLabel({
    language: currentLanguage,
    label: product.icon
  })
  const labelLabel = getLanguageLabel({
    language: currentLanguage,
    label: product.label
  })

  const productName = getProductName(
    commonT('productNameBase'),
    labelLabel,
    iconLabel
  )

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

      <Separator />

      <Form product={product} />

      <Separator />

      <Detail label={t('label')} value={labelLabel} />

      <Detail label={t('icon')} value={iconLabel} />

      <Detail label={t('color')} value={t('colorValueTODO')} />

      <Separator />

      <Text type="body-2">{product.description}</Text>

      <AvilabilityIndicator status={product.mold.status} />
    </Flexbox>
  )
}

type DetailProps = {
  label: string
  value: string
}

const Detail = ({ label, value }: DetailProps) => (
  <Flexbox>
    <Text type="caption">{label}</Text>

    <Text marginLeft="s-size" type="subtitle-2">
      {value}
    </Text>
  </Flexbox>
)

export default Info
