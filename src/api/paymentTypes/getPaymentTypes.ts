import { PaymentType } from 'models'
import { useQuery } from 'react-query'
import supabase from 'supabase'

const getPaymentTypes = async () => {
  const { data, error } = await supabase
    .from<PaymentType>('payment_type')
    .select('id, label, is_available')

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

export default getPaymentTypes
