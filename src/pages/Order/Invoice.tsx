import { Box, Button, SectionHead, Text, Tile } from 'components'
import { useTranslation } from 'hooks'
import { GetOrderResponse } from 'models'
import React from 'react'

type Props = {
  invoice: GetOrderResponse['invoice']
}

const Invoice = ({ invoice }: Props) => {
  const t = useTranslation('ORDER').withBase('SECTIONS.INVOICE')

  return (
    <Tile marginTop="m-size">
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