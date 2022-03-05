import { Heading, Button, Banner, Size } from 'components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flexbox } from '@zapalniczki/shared-components'

type Props = {
  link: {
    label: string
    to: string
  }
  size?: Size
  title: string
}

const BannerWithTitleAndLink = ({
  link: { label, to },
  size,
  title
}: Props) => {
  const navigate = useNavigate()

  return (
    <Banner marginTop="xxl-size" size={size}>
      <Flexbox
        alignItems={['unset', 'flex-start', 'flex-start', 'center']}
        flexDirection={['unset', 'column', 'column', 'row']}
        justifyContent="space-between"
        width="100%"
      >
        <Heading level={5}>{title}</Heading>

        <Button
          icon="arrow-right"
          label={label}
          marginTop={['unset', 'm-size', 'm-size', 0]}
          onClick={() => navigate(to)}
        />
      </Flexbox>
    </Banner>
  )
}

export default BannerWithTitleAndLink
