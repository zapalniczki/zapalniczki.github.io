import { Chip, Flexbox, QueryLoader, Text } from 'components'
import { useTranslation } from 'hooks'
import { GetCollectionsResponseItem, GetIconsResponseItem } from 'models'
import React from 'react'
import { UseQueryResult } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import { SpaceProps } from 'styled-system'
import { getLanguageLabel } from 'utils'
import Loader from './Condition.loader'

type Props = {
  keyName: 'collection_key' | 'icon_key'
  query: UseQueryResult<(GetIconsResponseItem | GetCollectionsResponseItem)[]>
  title: string
} & SpaceProps

const Condition = ({ keyName, query, title, ...props }: Props) => {
  const { language } = useTranslation('COMMON')
  const [searchParams, setSearchParams] = useSearchParams({})

  const keyValueInSeachParams = searchParams.get(keyName) || undefined
  const isKeyApplied = !!keyValueInSeachParams

  const getKeyValueApplied = (value: string) => keyValueInSeachParams === value

  const selectItem = (value: string) => {
    const isValueApplied = getKeyValueApplied(value)

    if (isKeyApplied) {
      if (isValueApplied) {
        searchParams.delete(keyName)
      } else {
        searchParams.delete(keyName)
        searchParams.append(keyName, value)
      }
    } else {
      searchParams.append(keyName, value)
    }

    setSearchParams(searchParams)
  }

  return (
    <QueryLoader Loader={<Loader {...props} />} query={query}>
      {(data) => (
        <Flexbox {...props} flexDirection="column">
          <Text type="subtitle-2">{title}</Text>

          <Flexbox flexWrap="wrap" gap="xs-size" paddingY="xxs-size">
            {data
              .sort((prev, next) => (prev.label_pl < next.label_pl ? -1 : 1))
              .map((elem) => {
                const label = getLanguageLabel({
                  language,
                  label: elem
                })

                const isValueApplied = getKeyValueApplied(elem.key)
                const isSelected = isKeyApplied && isValueApplied

                return (
                  <Chip
                    key={label}
                    onClick={() => selectItem(elem.key)}
                    rounded
                    selected={isSelected}
                  >
                    {label}
                  </Chip>
                )
              })}
          </Flexbox>
        </Flexbox>
      )}
    </QueryLoader>
  )
}

export default Condition
