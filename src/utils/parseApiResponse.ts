import {
  PostgrestResponse,
  PostgrestSingleResponse
} from '@supabase/postgrest-js'
import { Schema } from 'zod'

function parseApiResponse<T>(
  schema: Schema<T>,
  response: PostgrestResponse<unknown> | PostgrestSingleResponse<unknown>
): T {
  const { data, error } = response

  if (error) {
    throw new Error(error.code)
  }

  const parsedResponse = schema.safeParse(data)

  if (parsedResponse.success) {
    return parsedResponse.data
  }

  throw new Error(parsedResponse.error.message)
}

export default parseApiResponse
