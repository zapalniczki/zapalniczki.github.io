import { updateMold } from 'api'
import { MOLDS_TABLE } from 'constants/db_tables'
import { useFormSubmit } from 'hooks'
import { queryClient } from 'index'
import { MoldStatus } from 'models'
import { useState } from 'react'
import { useMutation } from 'react-query'

import { object, string } from 'yup'

const useForm = (id: string, status: MoldStatus) => {
  const [view, setView] = useState<View>({ view: 'FORM' })

  const initialValues: FormValues = {
    id,
    status
  }

  const schema = object({
    id: string(),
    status: string()
  })

  const useSubmit = () => {
    const { mutateAsync } = useMutation(updateMold, {
      onSuccess: () => {
        setView({
          view: 'SUCCESS'
        })

        queryClient.invalidateQueries([MOLDS_TABLE])
      }
    })

    return useFormSubmit((values: FormValues) => mutateAsync(values), {
      showSuccessToastMessage: true
    })
  }

  const onSubmit = useSubmit()

  return {
    initialValues,
    schema,
    onSubmit,
    view,
    setView
  }
}

export type FormValues = {
  id: string
  status: MoldStatus
}

type View = { view: 'FORM' } | { view: 'SUCCESS' } | { view: 'ERROR' }

export default useForm
