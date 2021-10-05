import Button from 'components/Button'
import React from 'react'
import { useState } from 'react'
import NativeModal from 'react-modal'

type Props = {
  label: string
}

const Modal = ({ label }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen((prev) => !prev)}>{label}</Button>
      <NativeModal isOpen={isOpen} style={customStyles}>
        modal init
      </NativeModal>
    </>
  )
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '50rem',
    height: '30rem',
    transform: 'translate(-50%, -50%)'
  }
}

export default Modal
