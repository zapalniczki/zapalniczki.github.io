import { Text, Button, Heading, Flexbox, Banner } from 'components'
import { CHRISTMAS_2021, PRODUCTS } from 'constants/routes'
import React, { useContext } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import YourPlaceInYourPoint from './YourPlaceInYourPoint'
import Christmas2021 from './Christmas2021'
import { remoteConfigContext } from 'providers'
import { TranslateFunc, useTranslation } from 'hooks'
import { Trans } from 'react-i18next'

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
          label="Produkty"
          onClick={() => navigate(PRODUCTS)}
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
          onClick={() => navigate(CHRISTMAS_2021)}
          size="medium"
        />
      </Flexbox>
    </Banner>
  )
})

export default useBanners
