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
  const { t } = useTranslation('PRODUCTS')

  return (
    <Flexbox width="35rem">
      <StyledInput
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('searchPlaceholder')}
        value={value}
      />

      <Button
        icon={value ? 'times' : 'search'}
        marginLeft="m-size"
        onClick={() => onChange('')}
        size="medium"
        variant="ternary"
      />
    </Flexbox>
  )
}

const StyledInput = styled.input`
  border: none;
  height: 4rem;
  width: 100%;
  padding: ${(props) => `0 ${props.theme.space['s-size']}`};
  border: 1px solid;
  border-color: ${getColor('border-color')};
  font-size: 1.7rem;
`

export default Search
