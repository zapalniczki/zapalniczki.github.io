import { Flexbox, Text } from 'components'
import {
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PAYMENT,
  CHECKOUT_PRODUCTS,
  CHECKOUT_SHIPPING
} from 'constants/routes'
import { changeColorAlpha } from 'utils'
import React from 'react'
import { useTranslation } from 'hooks'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import getColor from 'styles/getColor'

const StepTracker = () => {
  const { t } = useTranslation('COMMON')
  const current = useCheckoutStep()

  return (
    <Flexbox justifyContent="center" marginBottom="3rem">
      <Wrapper>
        {[1, 2, 3, 4, 5].map((step) => {
          if (step === 4) {
            return null
          }

          return (
            <Flexbox justifyContent="center" key={step}>
              <Flexbox
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                width="10rem"
                zIndex={1}
              >
                <StepIcon {...getProps(current, step)}>
                  {step === 5 ? 4 : step}
                </StepIcon>

                <Text marginTop="s-size" type="caption">
                  {t(`checkoutSteps.${step}`)}
                </Text>
              </Flexbox>
            </Flexbox>
          )
        })}
      </Wrapper>
    </Flexbox>
  )
}

const Wrapper = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-start;
  padding: 0;
  margin: auto;
  position: relative;

  :before {
    content: '';
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    margin: auto;
    width: 85%;
    height: 3px;
    background: ${(props) =>
      `${changeColorAlpha(getColor('border-color')(props), 0.6)}`};
  }
`
const getProps = (current: number, step: number) => {
  if (current === step || (current === 4 && step === 3)) {
    return { selected: true }
  }

  if (step < current) {
    return { done: true }
  }

  return {}
}

export const useCheckoutStep = () => {
  const { pathname } = useLocation()

  let current = 0

  if (pathname.includes(CHECKOUT_PRODUCTS)) {
    current = 1
  } else if (pathname.includes(CHECKOUT_DETAILS)) {
    current = 2
  } else if (pathname.includes(CHECKOUT_DELIVERY)) {
    current = 3
  } else if (pathname.includes(CHECKOUT_SHIPPING)) {
    current = 4
  } else if (pathname.includes(CHECKOUT_PAYMENT)) {
    current = 5
  }

  return current
}

type StepIconProps = {
  done?: boolean,
  selected?: boolean
}

const StepIcon = styled.h4<StepIconProps>`
  margin: 0;
  padding: ${(props) => props.theme.space['m-size']};
  background: ${(props) => {
    if (props.done) {
      return getColor('green')(props)
    } else if (props.selected) {
      return getColor('gray-10')(props)
    }
    return getColor('background-color')(props)
  }};
  border-radius: 50%;
  width: 3px;
  height: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => {
    if (props.done || props.selected) {
      return getColor('white')(props)
    }
    return getColor('black')(props)
  }};
  border: 1px solid;
  border-color: ${(props) =>
    !props.done && !props.selected && getColor('gray-10')(props)};
`

export default StepTracker
