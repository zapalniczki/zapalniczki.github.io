import { Box, Button, SectionHead, Text, Tile } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import { remoteConfigContext } from 'providers'
import React, { useContext } from 'react'

type Props = Pick<GetOrderResponse, 'invoice'>

const Invoice = ({ invoice }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.INVOICE')
  const { orderInvoice } = useContext(remoteConfigContext)

  if (!orderInvoice) {
    return null
  }

  return (
    <Tile>
      <SectionHead separator title={t('title')} />

      {invoice?.length ? (
        <>
          <Text type="body-2">{t('info')}</Text>

          <Box>
            <Button
              label={t('goToInvoice')}
              marginTop="m-size"
              onClick={() => {
                const path = invoice[0].url

                window.open(path, '_blank')
              }}
              size="medium"
            />
          </Box>
        </>
      ) : (
        <Text type="body-2">{t('empty')}</Text>
      )}
    </Tile>
  )
}

export default Invoice
