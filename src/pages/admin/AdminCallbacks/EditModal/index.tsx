import { ModalResult, Modal, ModalFooter, ModalHeader } from 'components'
import { Form as NativeForm, Formik } from 'formik'
import { useTranslation } from 'hooks'
import React, { useState } from 'react'
import Form from './Form'
import useForm from './useForm'

type Props = {
  done: boolean
  id: string
}

const EditModal = ({ done, id }: Props) => {
  const { t } = useTranslation('ADMIN_CALLBACKS')
  const { t: commonT } = useTranslation('COMMON')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const { initialValues, onSubmit, schema, setView, view } = useForm(id, done)

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
    content = (
      <ModalResult
        onClick={() => setView({ view: 'FORM' })}
        variant={view.view}
      />
    )
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
