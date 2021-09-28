import styled from 'styled-components'
import getColor from 'styles/getColor'

type LabelProps = {
  error?: boolean
}
const Label = styled.label<LabelProps>`
  font-size: ${(props) => props.theme.fontSizes['font-small']};
  border: none;
  background: none;
  padding: ${(props) =>
    `${props.theme.space['xs-size']} ${props.theme.space['xs-size']}`};
  color: ${(props) => {
    if (props.error) {
      return getColor('red')(props)
    }

    return getColor('label-color')(props)
  }};
  border: none;
`

export default Label
