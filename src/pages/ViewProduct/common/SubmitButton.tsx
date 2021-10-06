import { Button } from 'components'
import React from 'react'
import { useTranslation } from 'hooks'

type Props = {
  isInBasket: boolean
  disabled?: boolean
  separation?: boolean
}

const SubmitButton = ({ disabled, isInBasket, separation }: Props) => {
  const { t } = useTranslation('VIEW_PRODUCT')

  return (
    <Button
      disabled={disabled}
      marginTop={separation ? '2rem' : 0}
      size="medium"
      type="submit"
      variant={isInBasket ? 'secondary' : 'primary'}
    >
      {isInBasket ? t('actions.removeFromBasket') : t('actions.addToBasket')}
    </Button>
  )
}

export default SubmitButton
