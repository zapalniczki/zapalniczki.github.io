import { ResultIcon, Heading } from 'components'
import { useTranslation } from 'hooks'
import React from 'react'
import ModalContent from './ModalContent'
import ModalFooter from './ModalFooter'

type Props =
  | {
      variant: 'SUCCESS'
    }
  | {
      onClick: () => void
      variant: 'ERROR'
    }

const ModalResult = (props: Props) => {
  const { t: commonT } = useTranslation('COMMON')

  return (
    <>
      <ModalContent
        alignItems="center"
        justifyContent="center"
        padding="l-size"
      >
        <ResultIcon variant={props.variant} />

        <Heading level={5} marginTop="s-size">
          {commonT(`MODAL.${props.variant}.title`)}
        </Heading>
      </ModalContent>

      {props.variant === 'ERROR' && (
        <ModalFooter
          primaryButton={{
            label: commonT('MODAL.ERROR.buttonLabel'),
            onClick: props.onClick
          }}
        />
      )}
    </>
  )
}

export default ModalResult
