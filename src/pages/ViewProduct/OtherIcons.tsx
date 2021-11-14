import { getOtherIcons } from 'api'
import { ProductsGrid } from 'components'
import { useTranslation } from 'hooks'
import { Icon, Label } from 'models'
import React from 'react'
import { useQuery } from 'react-query'

type Props = {
  iconId: Icon['id']
  labelId: Label['id']
}

const OtherIcons = ({ iconId, labelId }: Props) => {
  const t = useTranslation('VIEW_PRODUCT').withBase('OTHER_ICONS')

  const params = { labelId, iconId }
  const otherIconsQuery = useQuery(['other_icons', params], () =>
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
        label: t('linkLabel')
      }}
      marginTop="xxl-size"
      query={otherIconsQuery}
      title={t('title')}
    />
  )
}

export default OtherIcons
