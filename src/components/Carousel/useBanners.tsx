import { Text, Button, Heading, Flexbox, Banner } from 'components'
import { PRODUCTS } from 'constants/routes'
import { History } from 'history'
import { TranslateFunc } from 'hooks'
import React from 'react'
import { useTranslation } from 'hooks'
import { useHistory } from 'react-router-dom'
import YourPlaceInYourPoint from './YourPlaceInYourPoint'

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
    <Banner background={<YourPlaceInYourPoint />} size="LARGE">
      <Flexbox
        alignItems="center"
        flexDirection="column"
        marginX="auto"
        width="70rem"
        zIndex={1}
      >
        <Heading level={3} textAlign="center">
          {/* eslint-disable-next-line react/jsx-newline */}
          <strong>Twoje</strong> miejsce w <strong>Twoim</strong>
          &nbsp;punkcie
        </Heading>

        <Text
          marginBottom="l-size"
          marginTop="m-size"
          textAlign="center"
          type="body-2"
        >
          {t('banner.description')}
        </Text>

        <Button
          icon="arrow-right"
          label={t('banner.buttonLabel')}
          onClick={() => history.push(PRODUCTS)}
          size="medium"
        />
      </Flexbox>
    </Banner>
  )
})

export default useBanners
