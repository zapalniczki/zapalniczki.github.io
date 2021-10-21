import { OrderStatus } from 'models'

const statusToColumns: Record<OrderStatus, AdminTableColumns[]> = {
  OPEN: [
    'id',
    'created_at',
    'customer_name',
    'customer_phone',
    'customer_email',
    'sum',
    'edit'
  ],
  CONFIRMED: ['id', 'updated_at', 'sum', 'edit'],
  PAYMENT_RECEIVED: [
    'id',
    'updated_at',
    'boxes_count',
    //  'molds'
    'edit'
  ],
  PRODUCTION: [
    'id',
    'updated_at',
    'is_company',
    'delivery_type',
    'sum',
    'edit'
  ],
  AWAITING_FOR_PICKUP: [
    'id',
    'updated_at',
    'delivery_type',
    'delivery_id',
    'edit'
  ],
  IN_DELIVERY: ['id', 'updated_at', 'delivery_type', 'delivery_id', 'edit'],
  COMPLETED: ['id', 'created_at', 'updated_at', 'order_time', 'sum', 'edit']
}

export type AdminTableColumns =
  | 'id'
  | 'updated_at'
  | 'created_at'
  | 'is_company'
  | 'customer_phone'
  | 'customer_name'
  | 'customer_email'
  | 'order_time'
  | 'sum'
  | 'delivery_type'
  | 'boxes_count'
  | 'delivery_id'
  | 'molds'
  | 'edit'

export default statusToColumns
