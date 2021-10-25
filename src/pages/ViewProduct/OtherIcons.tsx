import { getOtherIcons } from 'api'
import { Icon, Label } from 'models'
import { ProductsGrid } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { useQuery } from 'react-query'
import { PRODUCTS_TABLE } from 'constants/db_tables'

type Props = {
  iconId: Icon['id']
  labelId: Label['id']
}

const OtherIcons = ({ iconId, labelId }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')

  const params = { labelId, iconId }
  const otherIconsQuery = useQuery([PRODUCTS_TABLE, params], () =>
    getOtherIcons(params)
  )

  return (
    <ProductsGrid
      link={{
        to: {
          pathname: '/products',
          state: {
            labelId
          }
        },
        label: t('otherIcons.linkLabel')
      }}
      marginTop="xxl-size"
      query={otherIconsQuery}
      title={t('otherIcons.title')}
    />
  )
}

export default OtherIcons
