import { BannerWithImage, ExternalLink } from 'components'
import { useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'

const Catalogue = () => {
  const { language } = useTranslation('COMMON')
  const t = useTranslation('HOME').withBase('CATALOGUE')
  const { homeCatalogueDisplay, homeCatalogueOrder, ...remoteConfig } =
    useContext(remoteConfigContext)

  if (!homeCatalogueDisplay) {
    return null
  }

  const catalogueCover = remoteConfig[`catalogue_cover_${language}`]
  const catalogueLink = remoteConfig[`catalogue_link_${language}`]

  return (
    <BannerWithImage
      marginTop="xxxl-size"
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
