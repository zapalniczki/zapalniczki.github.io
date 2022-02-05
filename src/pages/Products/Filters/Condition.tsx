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
  keyId: 'collectionId' | 'iconId'
  query: UseQueryResult<(GetIconsResponseItem | GetCollectionsResponseItem)[]>
  title: string
} & SpaceProps

const Condition = ({ keyId, query, title, ...props }: Props) => {
  const { currentLanguage } = useTranslation('COMMON')
  const [searchParams, setSearchParams] = useSearchParams({})

  const keyIdValueInSeachParams = searchParams.get(keyId) || undefined
  const isKeyIdApplied = !!keyIdValueInSeachParams

  const getIdValueApplied = (value: string) => keyIdValueInSeachParams === value

  const selectItem = (value: string) => {
    const isValueApplied = getIdValueApplied(value)

    if (isKeyIdApplied) {
      if (isValueApplied) {
        searchParams.delete(keyId)
      } else {
        searchParams.delete(keyId)
        searchParams.append(keyId, value)
      }
    } else {
      searchParams.append(keyId, value)
    }

    setSearchParams(searchParams)
  }

  return (
    <QueryLoader
      Loader={<Loader {...props} />}
      // persistLoader
      query={query}
      // showLoading={false}
    >
      {(data) => (
        <Flexbox {...props} flexDirection="column">
          <Text type="subtitle-2">{title}</Text>

          <Flexbox flexWrap="wrap" gap="xs-size" paddingY="xxs-size">
            {data
              .sort((prev, next) => (prev.label_pl < next.label_pl ? -1 : 1))
              .map((elem) => {
                const label = getLanguageLabel({
                  language: currentLanguage,
                  label: elem
                })

                const isValueApplied = getIdValueApplied(elem.id)
                const isSelected = isKeyIdApplied && isValueApplied

                return (
                  <Chip
                    key={label}
                    onClick={() => selectItem(elem.id)}
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
