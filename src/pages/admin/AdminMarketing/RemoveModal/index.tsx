import { Marketing } from 'braty-common'
import { Modal, ModalFooter, ModalHeader } from 'components'
import { Form as NativeForm, Formik } from 'formik'
import { useTranslation } from 'hooks'
import React, { useState } from 'react'
import useForm from './useForm'

type Props = Pick<Marketing, 'id'>

const FormModal = ({ id }: Props) => {
  const { t } = useTranslation('ADMIN_MARKETING')
  const { t: commonT } = useTranslation('COMMON')

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { initialValues, onSubmit } = useForm(id)

  const onClose = () => {
    setIsModalOpen(false)
  }

  return (
    <Modal
      isOpen={isModalOpen}
      label={t('REMOVE_MODAL.buttonLabel')}
      setIsOpen={setIsModalOpen}
    >
      <ModalHeader onClick={() => onClose()}>
        {t('REMOVE_MODAL.title')}
      </ModalHeader>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnChange
      >
        {({ handleSubmit, submitForm }) => (
          <>
            <NativeForm onSubmit={handleSubmit} />

            <ModalFooter
              primaryButton={{
                onClick: () => submitForm(),
                label: commonT('MODAL.FOOTER.primaryLabel')
              }}
              secondaryButton={{
                onClick: () => onClose(),
                label: commonT('MODAL.FOOTER.secondaryLabel')
              }}
            />
          </>
        )}
      </Formik>
    </Modal>
  )
}

export default FormModal
