import { Flexbox } from '@zapalniczki/shared-components'
import Separator from '../Separator'
import React, { ReactNode } from 'react'
import { Button, Grid } from 'components'
import styled from 'styled-components'

type Props = {
  children?: ReactNode
  closeOnClick: () => void
}

const PanelHeader = ({ children, closeOnClick }: Props) => (
  <Flexbox
    backgroundColor="white"
    flexDirection="column"
    width="100%"
    // TODO Which this is not accepted? zIndex="basket"
    zIndex={60}
  >
    <RightToLeftGrid
      gridTemplateColumns="max-content max-content 1fr"
      padding="s-size"
    >
      <Button
        icon="times"
        mobileFullWidth={false}
        onClick={closeOnClick}
        size="small"
        variant="ternary"
      />

      {children}
    </RightToLeftGrid>

    <Separator marginX="s-size" marginY="0" width="auto" />
  </Flexbox>
)

const RightToLeftGrid = styled(Grid)`
  direction: rtl;
`

export default PanelHeader
