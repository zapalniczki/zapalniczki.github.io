import { BannerWithImage, ExternalLink } from 'components'
import { useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'

const Catalogue = () => {
  const { currentLanguage } = useTranslation('COMMON')
  const t = useTranslation('HOME').withBase('CATALOGUE')
  const { homeCatalogueDisplay, homeCatalogueOrder, ...remoteConfig } =
    useContext(remoteConfigContext)

  if (!homeCatalogueDisplay) {
    return null
  }

  const catalogueCover = remoteConfig[`catalogue_cover_${currentLanguage}`]
  const catalogueLink = remoteConfig[`catalogue_link_${currentLanguage}`]

  return (
    <BannerWithImage
      order={homeCatalogueOrder}
      size="MEDIUM"
      src={catalogueCover}
      title={t('title')}
    >
      <ExternalLink marginTop="m-size" to={catalogueLink}>
        {t('linkLabel')}
      </ExternalLink>
    </BannerWithImage>
  )
}

export default Catalogue
