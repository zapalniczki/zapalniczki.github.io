import { ModalResult, Modal, ModalFooter, ModalHeader } from 'components'
import { Form as NativeForm, Formik } from 'formik'
import { useTranslation } from 'hooks'
import { Order, Parcel } from 'models'
import React, { useState } from 'react'
import Form from './Form'
import useForm from './useForm'

type Props = {
  id: string
  parcelId?: Parcel['id']
  parcelLink?: Parcel['link']
  parcelRef?: Parcel['ref']
  status: Order['status']
}

const EditModal = ({ id, parcelId, parcelLink, parcelRef, status }: Props) => {
  const { t } = useTranslation('ADMIN_ORDERS')
  const { t: commonT } = useTranslation('COMMON')

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { initialValues, onSubmit, schema, setView, view } = useForm(
    id,
    status,
    parcelLink,
    parcelRef,
    parcelId
  )

  const onClose = () => {
    setIsModalOpen(false)
    setView({ view: 'FORM' })
  }

  let content

  if (view.view === 'FORM') {
    content = (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnChange
        validationSchema={schema}
      >
        {({ handleSubmit, submitForm }) => (
          <>
            <NativeForm
              onSubmit={handleSubmit}
              style={{ height: '100%', width: '100%' }}
            >
              <Form />
            </NativeForm>

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
    )
  }

  if (view.view === 'SUCCESS') {
    content = <ModalResult variant={view.view} />
  }

  if (view.view === 'ERROR') {
    content = <ModalResult onClick={() => onClose()} variant={view.view} />
  }

  return (
    <Modal
      isOpen={isModalOpen}
      label={t('EDIT_MODAL.buttonLabel')}
      setIsOpen={setIsModalOpen}
    >
      <ModalHeader onClick={() => onClose()}>
        {t('EDIT_MODAL.title')}
      </ModalHeader>

      {content}
    </Modal>
  )
}

export default EditModal
