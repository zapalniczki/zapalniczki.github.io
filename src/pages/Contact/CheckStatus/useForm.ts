import { useGetOrderStatus } from 'api'
import { loaderContext } from 'providers'
import { useContext, useState } from 'react'
import { useTranslation } from 'hooks'
import { object, string } from 'yup'

export type FormValues = {
  id: string
}

const useForm = () => {
  const { t } = useTranslation('CONTACT')
  const [view, setView] = useState<View>({ view: 'FORM' })

  const getOrderStatus = useGetOrderStatus()
  const initialValues = {
    id: ''
  }

  const { hide, show } = useContext(loaderContext)

  const schema = object({
    id: string()
      .required(t('items.CHECK_STATUS.form.id.validation.required'))
      .length(36, t('items.CHECK_STATUS.form.id.validation.length'))
  })

  const onSubmit = async (formValues: FormValues) => {
    try {
      show()

      const order = await getOrderStatus(formValues)

      setView({
        view: 'RESULT',
        status: order.status
      })
    } catch (e) {
      setView({
        view: 'ERROR',
        message: t('items.CHECK_STATUS.error.info')
      })
    }
    hide()
  }

  return {
    initialValues,
    schema,
    onSubmit,
    view,
    setView
  }
}

export type View =
  | { view: 'FORM' }
  | { status: string; view: 'RESULT' }
  | { message: string; view: 'ERROR' }

export default useForm
