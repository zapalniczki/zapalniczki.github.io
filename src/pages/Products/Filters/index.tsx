import { getCollections, getIcons } from 'api'
import { DB_TABLES } from 'braty-common'
import { Banner, Heading } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'
import Condition from './Condition'
import Search from './Search'

type Props = {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const Filters = ({ searchQuery, setSearchQuery }: Props) => {
  const t = useTranslation('PRODUCTS').withBase('FILTERS')

  const iconsQuery = useQuery(DB_TABLES.ICONS, () => getIcons())
  const collectionsQuery = useQuery(DB_TABLES.COLLECTIONS, () =>
    getCollections()
  )

  return (
    <Banner>
      <Heading level={4} marginBottom="m-size">
        {t('title')}
      </Heading>

      <Search onChange={(value) => setSearchQuery(value)} value={searchQuery} />

      <Condition
        keyId="collectionId"
        marginTop="m-size"
        query={collectionsQuery}
        title={t('collections')}
      />

      <Condition
        keyId="iconId"
        marginTop="m-size"
        query={iconsQuery}
        title={t('icons')}
      />
    </Banner>
  )
}

export default Filters
