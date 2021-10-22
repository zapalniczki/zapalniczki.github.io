import { Heading } from 'components'
import styled from 'styled-components'
import { space } from 'styled-system'

const StepTitle = styled(Heading).attrs(() => ({
  level: 5,
  textAlign: 'center'
}))`
  ${space}
`

export default StepTitle
