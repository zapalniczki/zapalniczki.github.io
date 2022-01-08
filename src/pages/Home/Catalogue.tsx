import { Banner } from 'components'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'

const Catalogue = () => {
  const { homeCatalogueDisplay } = useContext(remoteConfigContext)

  if (!homeCatalogueDisplay) {
    return null
  }

  return <Banner marginTop="xxl-size" size="MEDIUM" />
}

export default Catalogue
