import { MarketingStatus } from 'braty-common'

const statusToColumns: Record<MarketingStatus, AdminMarketingTableColumn[]> = {
  TODO: ['updated_at', 'name', 'plus_code', 'email', 'phone', 'notes', 'edit'],
  UNANSWERED: ['updated_at', 'name', 'plus_code', 'email', 'notes', 'edit'],
  INTERESTED: ['updated_at', 'name', 'plus_code', 'email', 'notes', 'edit'],
  REJECTED: [
    'updated_at',
    'name',
    'plus_code',
    'email',
    'notes',
    'edit',
    'sendBrochureAgreement',
  | 'sendBrochureCyclicAgreement',
    'delete'
  ]
}

export type AdminMarketingTableColumn =
  | 'created_at'
  | 'updated_at'
  | 'name'
  | 'plus_code'
  | 'email'
  | 'phone'
  | 'notes'
  | 'sendBrochureAgreement'
  | 'sendBrochureCyclicAgreement'
  | 'edit'
  | 'delete'

export default statusToColumns
