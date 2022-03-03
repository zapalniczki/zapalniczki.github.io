import { MarketingStatus } from 'braty-common'

const statusToColumns: Record<MarketingStatus, AdminMarketingTableColumn[]> = {
  TODO: ['updated_at', 'name', 'plus_code', 'email', 'phone', 'notes', 'edit'],
  UNANSWERED: ['updated_at', 'name', 'plus_code', 'email', 'notes', 'edit'],
  INTERESTED: [
    'updated_at',
    'name',
    'plus_code',
    'email',
    'notes',
    'sendBrochureAgreement',
    'edit'
  ],
  REJECTED: [
    'updated_at',
    'name',
    'plus_code',
    'email',
    'notes',
    'sendBrochureAgreement',
    'edit',
    'delete'
  ]
}

export type AdminMarketingTableColumn =
  | 'created_at'
  | 'delete'
  | 'edit'
  | 'email'
  | 'name'
  | 'notes'
  | 'phone'
  | 'plus_code'
  | 'sendBrochureAgreement'
  | 'updated_at'

export default statusToColumns
