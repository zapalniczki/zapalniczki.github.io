import { Button, Flexbox } from 'components'
import { useTranslation } from 'hooks'
import styled from 'styled-components'
import React from 'react'
import getColor from 'styles/getColor'
import getSpace from 'styles/getSpace'
import getRadius from 'styles/getRadius'
import getFontSize from 'styles/getFontSize'

type Props = {
  onChange: (value: string) => void
  value: string
}

const Search = ({ onChange, value }: Props) => {
  const t = useTranslation('PRODUCTS').withBase('FILTERS')

  return (
    <Flexbox flexDirection={['unset', 'column', 'column', 'row']}>
      <StyledInput
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('searchPlaceholder')}
        value={value}
      />

      <Button
        icon={value ? 'times' : 'search'}
        label={t(value ? 'clear' : 'search')}
        marginLeft={['unset', 0, 0, 'm-size']}
        marginTop={['unset', 'm-size', 'm-size', 0]}
        onClick={() => onChange('')}
        size="large"
        variant="primary"
      />
    </Flexbox>
  )
}

const StyledInput = styled.input`
  border: none;
  width: 100%;
  padding: ${getSpace('s-size')} ${getSpace('s-size')};

  border: 1px solid;
  border-radius: ${getRadius('tiny')};
  border-color: ${getColor('gray-medium')};

  font-size: ${getFontSize('new-small-l-size')};

  &:hover {
    border-color: ${getColor('gray-dark')};
  }
`

export default Search
