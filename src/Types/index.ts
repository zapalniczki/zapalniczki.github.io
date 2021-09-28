import { Mobile } from 'models/order'

export type ProductImage = {
  id: string
  url: string
}

export type SelectOption = {
  value: string
  label: string
}

export type Role = 'USER' | 'ADMIN'

export type Profile = {
  fullname: Fullname
  email: Email
  address: Address
  mobile: Mobile
}

export type Street = string
export type HourseNr = string
export type PostCode = string
export type City = string

export type Phone = string
export type Password = string
export type Email = string
export type Fullname = string
export type Address = string
export type Postcode = string
export type Nip = string
export type IsCompany = boolean
export type AddressCdn = string

export type Timestamp = string | number | Date

export type Price = number

export type Variant = string
