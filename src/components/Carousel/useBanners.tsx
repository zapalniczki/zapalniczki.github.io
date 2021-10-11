import { Button, Heading, BannerWithPicture } from 'components'
import { PRODUCTS } from 'constants/routes'
import { History } from 'history'
import { TranslateFunc } from 'hooks'
import React from 'react'
import { useTranslation } from 'hooks'
import { useHistory } from 'react-router-dom'

const useBanners = () => {
  const history = useHistory()
  const { t } = useTranslation('HOME')

  const banners = getBanners(t, history)

  const getBanner = (key: BannerKey): JSX.Element => banners[key]

  return {
    banners,
    getBanner
  }
}

export type BannerKey = 'YOUR_PLACE'

const getBanners = (
  t: TranslateFunc,
  history: History<unknown>
): Record<BannerKey, JSX.Element> => ({
  YOUR_PLACE: (
    <BannerWithPicture
      bannerKey="YOUR_PLACE"
      description={t('banner.description')}
      title={
        <Heading level={3} textAlign="center">
          <strong>Twoje</strong>
          &nbsp;miejsce w&nbsp;
          <strong>Twoim</strong>
          &nbsp;punkcie
        </Heading>
      }
    >
      <Button
        icon="arrow-right"
        onClick={() => history.push(PRODUCTS)}
        size="medium"
      >
        {t('banner.buttonLabel')}
      </Button>
    </BannerWithPicture>
  )
})

export default useBanners
