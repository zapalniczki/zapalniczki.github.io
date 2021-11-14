import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Svg } from 'assets/banners/christmas2021.svg'

const Christmas2021 = () => <Container />

const blink = keyframes`
  20%, 60%, 100% {
    opacity: 1;
    filter: blur(5px);
  }

  40%, 80% {
    opacity: 0;
    filter: blur(0px);
  }

`

const Container = styled(Svg)`
  #star-1 {
    animation: ${blink} 5s ease-in-out infinite alternate;
    animation-delay: 1s;
  }

  #star-2 {
    animation: ${blink} 5s ease-in-out infinite alternate;
    animation-delay: 0.5s;
  }

  #star-3 {
    animation: ${blink} 5s ease-in-out infinite alternate;
    animation-delay: 0s;
  }

  #star-4 {
    animation: ${blink} 5s ease-in-out infinite alternate;
    animation-delay: 1.5s;
  }

  #star-5 {
    animation: ${blink} 5s ease-in-out infinite alternate;
    animation-delay: 2s;
  }

  #star-6 {
    animation: ${blink} 5s ease-in-out infinite alternate;
    animation-delay: 2.5s;
  }
`

export default Christmas2021
