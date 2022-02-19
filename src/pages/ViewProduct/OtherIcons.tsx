import { getOtherIcons } from 'api'
import { ProductsGrid } from 'components'
import { useTranslation } from 'hooks'
import { Icon, Label } from 'braty-common'
import React from 'react'
import { useQuery } from 'react-query'

type Props = {
  iconKey: Icon['key']
  labelKey: Label['key']
}

const OtherIcons = ({ iconKey, labelKey }: Props) => {
  const t = useTranslation('VIEW_PRODUCT').withBase('OTHER_ICONS')

  const params = { labelKey, iconKey }
  const otherIconsQuery = useQuery(['other_icons', params], () =>
    getOtherIcons(params)
  )

  return (
    <ProductsGrid
      link={{
        to: { pathname: '/products', search: `label_key=${labelKey}` },
        label: t('linkLabel')
      }}
      marginTop="xxl-size"
      query={otherIconsQuery}
      title={t('title')}
    />
  )
}

export default OtherIcons
