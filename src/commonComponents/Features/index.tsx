import { IconName } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FeatureItem, Grid, SectionHead } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'

const Features = () => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <>
      <SectionHead marginTop="xxl-size" title={commonT('features.title')} />
      <Grid>
        {features.map((feature) => (
          <FeatureItem
            key={feature.key}
            title={commonT(`features.items.${feature.key}`)}
          >
            <FontAwesomeIcon icon={feature.icon} size="3x" />
          </FeatureItem>
        ))}
      </Grid>
    </>
  )
}

const features: { icon: IconName, key: string; }[] = [
  {
    key: 'FREE_DELIVERY',
    icon: 'truck'
  },
  {
    key: 'QUICK_SERVICE',
    icon: 'user-clock'
  },
  {
    key: 'RETURNS',
    icon: 'exchange-alt'
  },
  {
    key: 'QUALITY',
    icon: 'star'
  },
  {
    key: 'PICK_UP',
    icon: 'box-open'
  },
  {
    key: 'CLUB',
    icon: 'hand-holding-usd'
  }
]

export default Features
