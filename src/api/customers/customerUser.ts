import { GetCustomerResponse, getCustomerResponse } from 'models'
import { supabase } from 'config'
import { parseApiResponse } from 'utils'
import { User, DB_TABLES } from 'braty-common'

type Params = Pick<User, 'id'>

export const getCustomer = async ({ id }: Params) => {
  const response = await supabase
    .from<GetCustomerResponse>(DB_TABLES.USERS)
    .select(
      `
        *,
        address: ${DB_TABLES.ADDRESSES}!address_id (
          city,
          country,
          post_code,
          street_address
        )
      `
    )
    .eq('id', id)
    .single()

  const data = parseApiResponse(getCustomerResponse, response)

  return data
}
