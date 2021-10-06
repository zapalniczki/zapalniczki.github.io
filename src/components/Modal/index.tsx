import { Button } from 'components'
import React, { Dispatch, SetStateAction } from 'react'
import { ReactNode } from 'react'
import NativeModal from 'react-modal'
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'
import ModalResult from './ModalResult'
import ModalContent from './ModalContent'

type Props = {
  label: string
  children: ReactNode
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ label, children, isOpen, setIsOpen }: Props) => (
    <>
      <Button
        onClick={() => setIsOpen((prev) => !prev)}
        size="small"
        variant="secondary"
      >
        {label}
      </Button>
      <NativeModal isOpen={isOpen} style={customStyles}>
        {children}
      </NativeModal>
    </>
  )

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '60rem',
    minHeight: 'none',
    height: 'auto',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column' as const
  }
}

export default Modal
export { ModalHeader, ModalFooter, ModalResult, ModalContent }
