// @ts-check
import { Box, Select } from 'components'
import ORDER_STATUSES from 'constants/orderStatuses'
import { TranslateFunc } from 'hooks/useTranslation'
import React, { ReactNode, useState } from 'react'
import { useTranslation } from 'hooks'
import { displayDate, displayMoney, getDateFromTimestamp } from 'utils'
import uniq from 'lodash.uniq'
import { differenceInDays } from 'date-fns'
import { useUpdateOrderStatus, useGetMolds } from 'api'
import { MoldStatus } from 'models/new/mold'

type Props = {
  order: OrderOLD
  columns: AdminTableColumns[]
}

const Row = ({ order, columns }: Props) => {
  const { t } = useTranslation('COMMON')

  const [currentStatus, setCurrentStatus] = useState<CurrentStatus>({
    value: order.status,
    label: t(`ORDER_STATUSES.${order.status}`)
  })

  const orderInfo = useOrderInfo(order)

  useUpdateOrderStatus(order, currentStatus)

  return (
    <Box as="tr" height="6rem">
      {columns.map((column) => (
        <td key={column}>{orderInfo[column]}</td>
      ))}

      <Box as="td" minWidth="15rem">
        <Select
          onChange={(option) => {
            if (option) {
              setCurrentStatus(option)
            }
          }}
          options={getStatusesWithLabels(t)}
          value={currentStatus}
        />
      </Box>
    </Box>
  )
}

const useOrderInfo = (
  order: OrderOLD
): Record<AdminTableColumns, ReactNode> => {
  const { t: commonT } = useTranslation('COMMON')

  const moldsQuery = useGetMolds()
  const moldsData = moldsQuery.data

  return {
    id: order.id,
    modifiedAt: displayDate(getDateFromTimestamp(order.modifiedAt)),
    createdAt: displayDate(getDateFromTimestamp(order.createdAt)),
    customerType: commonT('customerTypes.' + order.customerType),
    boxesCount: order.products
      ?.map((product) => product.quantity)
      .reduce((prev, curr) => prev + curr, 0),
    customerName: order.contactDetails?.fullname,
    customerEmail: order.contactDetails?.email,
    customerPhone: order.contactDetails?.mobile.value,
    deliveryType: commonT('deliveryMethods.' + order.deliveryType),
    sum: displayMoney(order.total.sum),
    molds: uniq(
      order.products?.map((product) => ({
        productId: product.id
      }))
    ).map((mold) => {
      const displayName = mold.productId

      let status: MoldStatus | null = null

      if (moldsData) {
        const alfa = moldsData.find(
          (dbMold) => dbMold.productId === mold.productId
        )

        status = alfa?.status || null
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
    }),
    orderTime: differenceInDays(
      getDateFromTimestamp(order.modifiedAt),
      getDateFromTimestamp(order.createdAt)
    ),
    deliveryId: 'XXX XXX XXX XXX XXX'
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
  | 'modifiedAt'
  | 'createdAt'
  | 'customerType'
  | 'customerName'
  | 'deliveryType'
  | 'sum'
  | 'boxesCount'
  | 'molds'
  | 'orderTime'
  | 'deliveryId'
  | 'customerEmail'
  | 'customerPhone'

export type CurrentStatus = {
  value: string
  label: string
}

export default Row
