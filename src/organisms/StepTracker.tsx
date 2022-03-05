import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flexbox, Text } from 'components'
import { useCheckoutStep, useTranslation } from 'hooks'
import React from 'react'
import styled, { useTheme } from 'styled-components'
import { breakpoints, getColor, getSpace } from 'styles'

const StepTracker = () => {
  const { t } = useTranslation('COMMON')
  const current = useCheckoutStep()
  const { colors } = useTheme()

  return (
    <Flexbox justifyContent="center">
      <Wrapper>
        {[1, 2, 3].map((step) => {
          const stepProps = getProps(current, step)

          let stepContent = (
            <Text
              fontWeight={stepProps.selected ? 'bold' : 'unset'}
              type="body-2"
            >
              {step}
            </Text>
          )

          if (stepProps.done) {
            stepContent = <FontAwesomeIcon color={colors.white} icon="check" />
          }

          return (
            <Flexbox
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              key={step}
              zIndex={1}
            >
              <StepIcon {...stepProps}>{stepContent}</StepIcon>

              <Text
                fontWeight={stepProps.selected ? 'bold' : 'unset'}
                marginTop="s-size"
                type="caption"
                wrap={false}
              >
                {t(`checkoutSteps.${step}`)}
              </Text>
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
    top: 2.25rem;
    left: 0;
    right: 0;
    margin: auto;
    width: 90%;
    height: 2px;
    background: ${getColor('gray-light')};
  }

  ${breakpoints('mobile')`
    width: 100%;
  `}

  ${breakpoints('tablet')`
    width: 75%;
  `}
`

type StepIconProps = {
  done?: boolean
  selected?: boolean
}

const StepIcon = styled.div<StepIconProps>`
  padding: ${getSpace('m-size')};
  margin: ${(props) => `0 ${getSpace('s-size')(props)}`};
  border-radius: 50%;
  background: ${(props) => {
    if (props.done) {
      return getColor('green')(props)
    }

    return getColor('white')(props)
  }};

  width: 4.5rem;
  height: 4.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid;
  border-color: ${(props) => {
    if (props.done) {
      return getColor('green')(props)
    } else if (props.selected) {
      return getColor('gray-dark')(props)
    }

    return getColor('gray-medium')(props)
  }};
`

const getProps = (current: number, step: number) => {
  if (current === step || (current === 3 && step === 3)) {
    return { selected: true }
  }

  if (step < current) {
    return { done: true }
  }

  return {}
}

export default StepTracker
