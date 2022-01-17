import { removeMarketing } from 'api'
import { DB_TABLES, Marketing } from 'braty-common'
import { useFormSubmit } from 'hooks'
import { queryClient } from 'index'
import { useMutation } from 'react-query'

const useForm = (id: Marketing['id']) => {
  const initialValues: FormValues = {
    id: id ?? ''
  }

  const useSubmit = () => {
    const { mutateAsync: mutateRemoveMarketing } = useMutation(removeMarketing)

    return useFormSubmit(
      async (values: FormValues) => {
        const marketingResponse = await mutateRemoveMarketing({
          id: values.id
        })

        return marketingResponse
      },
      {
        showSuccessToastMessage: true,
        onSuccess: () => {
          queryClient.invalidateQueries([DB_TABLES.MARKETING])
        }
      }
    )
  }

  const onSubmit = useSubmit()

  return {
    initialValues,
    onSubmit
  }
}

export type FormValues = Pick<Marketing, 'id'>

export default useForm
