import { Chip, Flexbox, QueryLoader, Text } from 'components'
import { useTranslation } from 'hooks'
import { GetCollectionsResponseItem, GetIconsResponseItem } from 'models'
import React from 'react'
import { UseQueryResult } from 'react-query'
import { SpaceProps } from 'styled-system'
import { getLanguageLabel } from 'utils'
import Loader from './Condition.loader'

type Props = {
  query: UseQueryResult<(GetIconsResponseItem | GetCollectionsResponseItem)[]>
  selectItem: (id: string | undefined) => void
  selectedItem?: string
  title: string
} & SpaceProps

const Condition = ({
  query,
  selectItem,
  selectedItem,
  title,
  ...props
}: Props) => {
  const { currentLanguage } = useTranslation('COMMON')

  return (
    <QueryLoader
      Loader={<Loader {...props} />}
      query={query}
      showLoading={false}
    >
      {(data) => (
        <Flexbox {...props} flexDirection="column">
          <Text type="subtitle-2">{title}</Text>

          <Flexbox flexWrap="wrap" gap="xs-size" paddingY="xxs-size">
            {data
              .sort((prev, next) => (prev.label_pl < next.label_pl ? -1 : 1))
              .map((elem) => {
                const isSelected = elem.id === selectedItem
                const label = getLanguageLabel({
                  language: currentLanguage,
                  label: elem
                })

                return (
                  <Chip
                    key={label}
                    onClick={() => selectItem(isSelected ? undefined : elem.id)}
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
