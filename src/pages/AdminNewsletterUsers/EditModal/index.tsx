import { ModalResult, Modal, ModalFooter, ModalHeader } from 'components'
import { Form as NativeForm, Formik } from 'formik'
import { useTranslation } from 'hooks'
import React, { useState } from 'react'
import Form from './Form'
import useForm from './useForm'

type Props = {
  id: string
  consent: boolean
}

const EditModal = ({ id, consent }: Props) => {
  const { t } = useTranslation('ADMIN_NEWSLETTER_USERS')
  const { t: commonT } = useTranslation('COMMON')

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { view, initialValues, onSubmit, schema, setView } = useForm(
    id,
    consent
  )

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
                onClick: () => setIsModalOpen(false),
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
      <ModalHeader onClick={() => setIsModalOpen(false)}>
        {t('EDIT_MODAL.title')}
      </ModalHeader>
      {content}
    </Modal>
  )
}

export default EditModal
