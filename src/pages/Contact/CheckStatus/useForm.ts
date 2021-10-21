import { useGetOrderStatus } from 'api'
import { loaderContext } from 'providers'
import { useContext, useState } from 'react'
import { useSchema, useTranslation } from 'hooks'
import { object } from 'yup'

export type FormValues = {
  order_id: string
}

const useForm = () => {
  const { t } = useTranslation('CONTACT')
  const [view, setView] = useState<View>({ view: 'FORM' })

  const { getSchema } = useSchema()

  const getOrderStatus = useGetOrderStatus()
  const initialValues: FormValues = {
    order_id: ''
  }

  const { hide, show } = useContext(loaderContext)

  const schema = object({
    order_id: getSchema('ORDER_ID')
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
