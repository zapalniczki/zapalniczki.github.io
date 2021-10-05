import { Box, Select } from 'components'
import { TranslateFunc } from 'hooks/useTranslation'
import React, { ReactNode, useState } from 'react'
import { useTranslation } from 'hooks'
import { displayDate, displayMoney } from 'utils'
import uniq from 'lodash.uniq'
import { parseISO, differenceInDays } from 'date-fns'
import { useUpdateOrderStatus, useGetMolds, GetOrdersResponse } from 'api'
import { MoldStatus, ORDER_STATUSES } from 'models'

type Props = {
  order: GetOrdersResponse
  columns: AdminTableColumns[]
}

const Row = ({ order, columns }: Props) => {
  const { t: commonT } = useTranslation('COMMON')
  const [currentStatus, setCurrentStatus] = useState<CurrentStatus>({
    value: order.status,
    label: commonT(`ORDER_STATUSES.${order.status}`)
  })
  const orderInfo = useOrderInfo(order)

  useUpdateOrderStatus(order, currentStatus)

  return (
    <Box as="tr" height="6rem">
      {columns.map((column) => (
        <Box as="td" key={column} padding="0 1rem">
          {orderInfo[column]}
        </Box>
      ))}

      <Box as="td" minWidth="15rem" padding="0 1rem">
        <Select
          onChange={(option) => {
            if (option) {
              setCurrentStatus(option)
            }
          }}
          options={getStatusesWithLabels(commonT)}
          value={currentStatus}
        />
      </Box>
    </Box>
  )
}

const useOrderInfo = (
  order: GetOrdersResponse
): Record<AdminTableColumns, ReactNode> => {
  const { t } = useTranslation('ADMIN_ORDERS')

  const moldsQuery = useGetMolds()
  const moldsData = moldsQuery.data

  return {
    id: order.id,
    updatedAt: displayDate(order.updated_at),
    createdAt: displayDate(order.created_at),
    isCompany: t(`IS_COMPANY.${order.isCompany.is_company ? 'yes' : 'no'}`),
    customerName: order.customerName.full_name,
    customerEmail: order.customerEmail.email,
    customerPhone: order.customerPhone.phone,
    orderTime: differenceInDays(
      parseISO(order.created_at),
      parseISO(order.updated_at)
    ),
    sum: displayMoney(order.total),
    deliveryType: order.deliveryType.label,
    deliveryId: 'XXX XXX XXX XXX XXX',
    boxesCount:
      order.products
        ?.map((product) => product.quantity)
        .reduce((prev, curr) => prev + curr, 0) || 0,

    molds: uniq(
      order.products?.map((product) => ({
        productId: product.id
      }))
    ).map((mold) => {
      const displayName = mold.productId

      let status: MoldStatus | null = null

      if (moldsData) {
        // const alfa = moldsData.find(
        //   (dbMold) => dbMold.productId === mold.productId
        // )
        const alfa = null

        status = null
      }

      let color = 'red'
      if (status === 'DONE') {
        color = 'green'
      }

      if (status === 'IN_PROGRESS') {
        color = 'yellow'
      }

      return (
        <Box color={color} key={displayName}>
          {displayName}
        </Box>
      )
    })
    // orderTime: differenceInDays(
    //   getDateFromTimestamp(order.modifiedAt),
    //   getDateFromTimestamp(order.createdAt)
    // ),
  }
}

const getStatusesWithLabels = (t: TranslateFunc) => {
  return ORDER_STATUSES.map((status) => ({
    value: status,
    label: t(`ORDER_STATUSES.${status}`)
  }))
}

export type AdminTableColumns =
  | 'id'
  | 'updatedAt'
  | 'createdAt'
  | 'isCompany'
  | 'customerPhone'
  | 'customerName'
  | 'customerEmail'
  | 'orderTime'
  | 'sum'
  | 'deliveryType'
  | 'boxesCount'
  | 'deliveryId'
  | 'molds'

export type CurrentStatus = {
  value: string
  label: string
}

export default Row
