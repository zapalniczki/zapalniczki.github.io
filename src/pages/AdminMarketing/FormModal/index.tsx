import { Marketing } from 'braty-common'
import { Modal, ModalFooter, ModalHeader, ModalResult } from 'components'
import { Form as NativeForm, Formik } from 'formik'
import { useTranslation } from 'hooks'
import React, { useState } from 'react'
import Form from './Form'
import useForm from './useForm'

type Props = Partial<Omit<Marketing, 'updated_at' | 'created_at' | 'is_test'>>

const FormModal = ({
  email,
  id,
  name,
  notes,
  phone,
  plus_code,
  send_brochure_agreement,
  send_brochure_cyclic_agreement
}: Props) => {
  const { t } = useTranslation('ADMIN_MARKETING')
  const { t: commonT } = useTranslation('COMMON')

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { initialValues, onSubmit, schema, setView, view } = useForm(
    id,
    email,
    phone,
    notes,
    name,
    plus_code,
    send_brochure_agreement,
    send_brochure_cyclic_agreement
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
        {({ dirty, handleSubmit, submitForm }) => (
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
                label: commonT('MODAL.FOOTER.primaryLabel'),
                disabled: !dirty
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
      label={t(`FORM_MODAL.${id ? 'buttonLabelEdit' : 'buttonLabelAdd'}`)}
      setIsOpen={setIsModalOpen}
    >
      <ModalHeader onClick={() => onClose()}>
        {t(`FORM_MODAL.${id ? 'titleEdit' : 'titleAdd'}`)}
      </ModalHeader>

      {content}
    </Modal>
  )
}

export default FormModal
