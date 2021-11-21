import { Text, Button, Heading, Flexbox, Banner } from 'components'
import { CHRISTMAS_2021, PRODUCTS } from 'constants/routes'
import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import YourPlaceInYourPoint from './YourPlaceInYourPoint'
import Christmas2021 from './Christmas2021'

const useBanners = () => {
  const history = useNavigate()
  const banners = getBanners(history)

  const getBanner = (key: BannerKey): JSX.Element => banners[key]

  return {
    banners,
    getBanner
  }
}

export type BannerKey = 'YOUR_PLACE' | 'CHRISTMAS_2021'

const getBanners = (
  navigate: NavigateFunction
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
          Największy w Polsce wybór zapalniczek z nazwą miejscowości. Znajdź
          swoją zapalniczkę i razem z nami poszerzaj swoją ofertę sprzedażową.
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
          {/* eslint-disable-next-line react/jsx-newline */}
          <strong>Wyjątkowa</strong> oferta <strong>świąteczna</strong>
        </Heading>

        <Text
          marginBottom="l-size"
          marginTop="m-size"
          textAlign="center"
          type="body-2"
        >
          Jako jedyni w Polsce oferujemy zapalniczki tłoczone metodą
          hotstampingu z unikalnymi wzorami dedykowanymi na ten specjalny czas.
          Zapraszamy do zapoznania się z naszymi produktami.
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
