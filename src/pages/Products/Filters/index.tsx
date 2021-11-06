import { getCollections, getIcons } from 'api'
import { Banner, Flexbox, Heading } from 'components'
import { COLLECTIONS_TABLE, ICONS_TABLE } from 'constants/db_tables'
import { useTranslation } from 'hooks'
import React from 'react'
import { useQuery } from 'react-query'
import { Filters as FiltersType } from '..'
import Condition from './Condition'
import Search from './Search'

type Props = {
  filters: FiltersType
  searchQuery: string

  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const Filters = ({
  filters,
  searchQuery,
  setFilters,
  setSearchQuery
}: Props) => {
  const t = useTranslation('PRODUCTS').withBase('FILTERS')

  const iconsQuery = useQuery(ICONS_TABLE, () => getIcons())
  const collectionsQuery = useQuery(COLLECTIONS_TABLE, () => getCollections())

  return (
    <Banner horizonal>
      <Flexbox
        flexDirection="column"
        height="100%"
        minHeight="100%"
        width="100%"
      >
        <Heading level={4} marginBottom="m-size">
          {t('title')}
        </Heading>

        <Search
          onChange={(value) => setSearchQuery(value)}
          value={searchQuery}
        />

        <Condition
          marginTop="m-size"
          query={collectionsQuery}
          selectItem={(value) =>
            setFilters({ ...(value && { collectionId: value }) })
          }
          selectedItem={filters.collectionId}
          title={t('collections')}
        />

        <Condition
          marginTop="m-size"
          query={iconsQuery}
          selectItem={(value) =>
            setFilters({ ...(value && { iconId: value }) })
          }
          selectedItem={filters.iconId}
          title={t('icons')}
        />
      </Flexbox>
    </Banner>
  )
}

export default Filters
