import { Button, Flexbox } from 'components'
import { useTranslation } from 'hooks'
import styled from 'styled-components'
import React from 'react'
import getColor from 'styles/getColor'

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
        label={value ? 'clear' : 'search'}
        marginLeft={['unset', 0, 0, 'm-size']}
        marginTop={['unset', 'm-size', 'm-size', 0]}
        onClick={() => onChange('')}
        size="medium"
        variant="primary"
      />
    </Flexbox>
  )
}

const StyledInput = styled.input`
  border: none;
  height: 4.6rem;
  width: 100%;
  padding: ${(props) => `0 ${props.theme.space['s-size']}`};
  border: 1px solid;
  border-color: ${getColor('border-color')};
  font-size: 1.7rem;
`

export default Search
