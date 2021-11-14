import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Svg } from 'assets/banners/yourPlaceInYourPoint.svg'

const YourPlaceInYourPoint = () => <Container />

const blink = keyframes`
  20%, 60%, 100% {
    filter: blur(5px) brightness(1);
  }

  40%, 80% {
    filter: blur(0px) brightness(0);
  }

`

const Container = styled(Svg)`
  #windows {
    animation: ${blink} 10s linear infinite alternate;
    animation-delay: 5s;
    filter: blur(0px) brightness(1);
  }
`

export default YourPlaceInYourPoint
