import { Link } from 'components'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import getSpace from 'styles/getSpace'

const NavigationLink = styled(Link)`
  padding: ${(props) =>
    `${getSpace('xs-size')(props)} ${getSpace('m-size')(props)}`};

  &:hover {
    background: ${getColor('gray-light')};
  }
`

export default NavigationLink
