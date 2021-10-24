import { IconName } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FeatureItem, Flexbox, Grid, SectionHead } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import styled, { keyframes } from 'styled-components'

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
            <IconWrapper padding="m-size">
              <FontAwesomeIcon icon={feature.icon} size="3x" />
            </IconWrapper>
          </FeatureItem>
        ))}
      </Grid>
    </>
  )
}

const rotateX = keyframes`
  0% {
    transform: rotateY(0);
  }

  100% {
    transform: rotateY(360deg);
  }

`

const IconWrapper = styled(Flexbox)`
  &:hover {
    animation: ${rotateX} 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }
`

const features: { icon: IconName; key: string }[] = [
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
