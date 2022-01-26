import { BannerWithImage, ExternalLink } from 'components'
import { useTranslation } from 'hooks'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'

const Catalogue = () => {
  const t = useTranslation('HOME').withBase('CATALOGUE')
  const {
    catalogue_cover_pl,
    catalogue_link_pl,
    homeCatalogueDisplay,
    homeCatalogueOrder
  } = useContext(remoteConfigContext)

  if (!homeCatalogueDisplay) {
    return null
  }

  return (
    <BannerWithImage
      order={homeCatalogueOrder}
      size="MEDIUM"
      src={catalogue_cover_pl}
      title={t('title')}
    >
      <ExternalLink marginTop="m-size" to={catalogue_link_pl}>
        {t('linkLabel')}
      </ExternalLink>
    </BannerWithImage>
  )
}

export default Catalogue
