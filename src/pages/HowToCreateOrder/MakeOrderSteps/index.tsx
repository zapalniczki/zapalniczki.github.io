import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Flexbox, Tile } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'
import { useTheme } from 'styled-components'

const MakeOrderSteps = () => {
  const { colors } = useTheme()
  const { t } = useTranslation('HOW_TO_CREATE_ORDER')

  return (
    <Tile flexDirection="row" marginTop="xxl-size">
      <Flexbox alignItems="center" justifyContent="center" width="20rem">
        <FontAwesomeIcon
          color={colors['background-color-01']}
          icon="question"
          size="10x"
        />
      </Flexbox>

      <Flexbox border="2px solid red" marginLeft="l-size">
        <Box as="h2">{t('MAKE_ORDER_STEPS.title')}</Box>
      </Flexbox>
    </Tile>
  )
}

export default MakeOrderSteps
