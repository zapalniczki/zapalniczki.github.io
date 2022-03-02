import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flexbox, Grid, SectionTitle, Text } from 'components'
import { useTranslation } from 'hooks'
import { GetProductsResponseItem } from 'models'
import React from 'react'
import { BaseProps } from '.'
import ProductTile from './ProductTile'

type Props = BaseProps & {
  count?: number
  products: GetProductsResponseItem[]
}

const Content = ({
  count,
  hideWhenEmpty,
  link,
  products,
  sectionHeadChildren,
  showCount,
  title,
  ...props
}: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  const productsCount = count ? count : products.length

  if (hideWhenEmpty && !productsCount) {
    return null
  }

  return (
    <Flexbox as="section" flexDirection="column" {...props}>
      <SectionTitle
        count={showCount ? productsCount : undefined}
        link={link}
        marginBottom="l-size"
        title={title}
      >
        {sectionHeadChildren || undefined}
      </SectionTitle>

      {!productsCount && (
        <Flexbox
          alignItems="center"
          flexDirection="column"
          height="25rem"
          justifyContent="center"
          width="100%"
        >
          <FontAwesomeIcon icon="search" size="2x" />

          <Text marginTop="m-size" type="body-1">
            {commonT('productsEmptyState')}
          </Text>
        </Flexbox>
      )}

      <Grid
        gridTemplateColumns={[
          'unset',
          '1fr',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)'
        ]}
      >
        {products.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </Grid>
    </Flexbox>
  )
}

export default Content
