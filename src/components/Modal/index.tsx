import { Button } from 'components'
import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import NativeModal from 'react-modal'
import ModalContent from './ModalContent'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'
import ModalResult from './ModalResult'

type Props = {
  children: ReactNode
  isOpen: boolean
  label: string
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ children, isOpen, label, setIsOpen }: Props) => (
  <>
    <Button
      label={label}
      onClick={() => setIsOpen((prev) => !prev)}
      size="small"
      variant="secondary"
    />

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
    maxHeight: '75vh',
    minHeight: 'max-content',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column' as const
  }
}

export default Modal
export { ModalHeader, ModalFooter, ModalResult, ModalContent }
