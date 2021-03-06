import { ROUTES } from 'braty-common'
import { Banner, Button, Heading, Text } from 'components'
import { TranslateFunc, useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'
import { Flexbox } from '@zapalniczki/shared-components'
import { Trans } from 'react-i18next'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Theme } from 'styles'
import Christmas2021 from './Christmas2021'
import YourPlaceInYourPoint from './YourPlaceInYourPoint'

const useHero = () => {
  const commonT = useTranslation('COMMON').withBase('BANNERS')
  const { christmas2021 } = useContext(remoteConfigContext)

  const history = useNavigate()
  const { colors } = useTheme()
  const banners = getBanners(history, commonT, colors)

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
  commonT: TranslateFunc,
  colors: Theme['colors']
): Record<BannerKey, JSX.Element> => ({
  YOUR_PLACE: (
    <Banner background={<YourPlaceInYourPoint />} size="LARGE" vhOnMobile>
      <Flexbox
        alignItems="center"
        flexDirection="column"
        marginX="auto"
        maxHeight="100%"
        maxWidth="100%"
        width="70rem"
        zIndex={1}
      >
        <Heading as="h1" level={3} textAlign="center">
          <Trans
            components={{
              strong: (
                <span
                  style={{ color: colors['braty-red'], fontWeight: 'bold' }}
                />
              )
            }}
            i18nKey="BANNERS.YOUR_PLACE.title"
            ns="COMMON"
          />
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
          size="large"
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

export default useHero
