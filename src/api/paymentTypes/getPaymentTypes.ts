import { PaymentType } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'

type GetPaymentTypesResponse = PaymentType

const getPaymentTypes = async () => {
  const { data, error } = await supabase
    .from<GetPaymentTypesResponse>('payment_type')
    .select()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('No data in getPaymentTypes')
  }

  return data
}

export const useGetPaymentTypes = () =>
  useQuery('paymentTypes', getPaymentTypes)
