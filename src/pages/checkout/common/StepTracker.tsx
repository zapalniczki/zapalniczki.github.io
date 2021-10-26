import { Flexbox, Text } from 'components'
import {
  CHECKOUT_DELIVERY,
  CHECKOUT_DETAILS,
  CHECKOUT_PAYMENT,
  CHECKOUT_PRODUCTS,
  CHECKOUT_SHIPPING
} from 'constants/routes'
import React, { Fragment } from 'react'
import { useTranslation } from 'hooks'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import getColor from 'styles/getColor'
import getSpace from 'styles/getSpace'

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
            <Fragment key={step}>
              <Flexbox
                justifyContent="center"
                key={step}
                width={step !== 1 ? '100%' : 'auto'}
                zIndex={1}
              >
                {step !== 1 && <Line />}

                <Flexbox
                  alignItems="center"
                  flexDirection="column"
                  width="100%"
                >
                  <StepIcon {...getProps(current, step)}>
                    {step === 5 ? 4 : step}
                  </StepIcon>

                  <Text marginTop="s-size" type="caption" wrap={false}>
                    {t(`checkoutSteps.${step}`)}
                  </Text>
                </Flexbox>
              </Flexbox>
            </Fragment>
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

const Line = styled.hr`
  width: 100%;
  height: 0.1px;
  margin-top: 1.8rem;
  border: 1px solid;
  border-color: ${getColor('border-color')};
`

type StepIconProps = {
  done?: boolean
  selected?: boolean
}

const StepIcon = styled.h4<StepIconProps>`
  margin: 0;
  padding: ${getSpace('m-size')};
  background: ${getColor('background-color')};
  border-radius: 50%;
  margin: ${(props) => `0 ${getSpace('s-size')(props)}`};
  width: 3px;
  height: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${getColor('black')};
  border: 1px solid;
  border-color: ${(props) => {
    if (props.done) {
      return getColor('green')(props)
    } else if (props.selected) {
      return undefined
    }

    return getColor('border-color')(props)
  }};
`

export default StepTracker
