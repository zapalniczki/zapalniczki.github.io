import { ROUTES } from 'braty-common'
import { Banner, Button, Flexbox, Heading, Text } from 'components'
import { TranslateFunc, useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { Trans } from 'react-i18next'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Christmas2021 from './Christmas2021'
import YourPlaceInYourPoint from './YourPlaceInYourPoint'

const useBanners = () => {
  const commonT = useTranslation('COMMON').withBase('BANNERS')
  const { christmas2021 } = useContext(remoteConfigContext)

  const history = useNavigate()
  const banners = getBanners(history, commonT)

  const getBanner = (key: BannerKey): JSX.Element => banners[key]

  let visibleBanners: BannerKey[] = ['YOUR_PLACE']
  if (christmas2021) {
    visibleBanners = ['CHRISTMAS_2021', ...visibleBanners]
  }

  return {
    banners,
    getBanner,
    visibleBanners
  }
}

export type BannerKey = 'YOUR_PLACE' | 'CHRISTMAS_2021'

const getBanners = (
  navigate: NavigateFunction,
  commonT: TranslateFunc
): Record<BannerKey, JSX.Element> => ({
  YOUR_PLACE: (
    <Banner background={<YourPlaceInYourPoint />} size="LARGE" vhOnMobile>
      <Flexbox
        alignItems="center"
        flexDirection="column"
        marginX="auto"
        maxWidth="100%"
        width="70rem"
        zIndex={1}
      >
        <Heading as="h1" level={3} textAlign="center">
          <Trans i18nKey="BANNERS.YOUR_PLACE.title" ns="COMMON" />
        </Heading>

        <Text
          marginBottom="l-size"
          marginTop="m-size"
          textAlign="center"
          type="body-2"
        >
          {commonT('YOUR_PLACE.subtitle')}
        </Text>

        <Button
          icon="arrow-right"
          label={commonT('YOUR_PLACE.buttonLabel')}
          onClick={() => navigate(ROUTES.PRODUCTS)}
          size="medium"
        />
      </Flexbox>
    </Banner>
  ),

  CHRISTMAS_2021: (
    <Banner background={<Christmas2021 />} size="LARGE" vhOnMobile>
      <Flexbox
        alignItems="center"
        flexDirection="column"
        marginX="auto"
        maxWidth="100%"
        width="70rem"
        zIndex={1}
      >
        <Heading as="h1" level={3} textAlign="center">
          {commonT('CHRISTMAS_2021.title')}
        </Heading>

        <Text
          marginBottom="l-size"
          marginTop="m-size"
          textAlign="center"
          type="body-2"
        >
          {commonT('CHRISTMAS_2021.subtitle')}
        </Text>

        <Button
          icon="arrow-right"
          label="Produkty"
          onClick={() => navigate(ROUTES.CHRISTMAS_2021)}
          size="medium"
        />
      </Flexbox>
    </Banner>
  )
})

export default useBanners
