import styled from 'styled-components'
import { getColor, getSpace } from 'styles'

type LabelProps = {
  error?: boolean
}
const Label = styled.label<LabelProps>`
  font-size: ${(props) => props.theme.fontSizes['font-small']};
  border: none;
  background: none;
  padding: ${(props) =>
    `${getSpace('xs-size')(props)} ${getSpace('xs-size')(props)}`};
  color: ${(props) => {
    if (props.error) {
      return getColor('red')(props)
    }

    return getColor('label-color')(props)
  }};
  border: none;
`

export default Label
